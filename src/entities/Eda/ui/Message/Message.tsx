import { useCallback, useEffect, useState } from "react";
import css from "./Message.module.css";
import useEdaStore from "../../model/useEda";

const TYPING_SPEED = 25;
const ERASE_DELAY = 200;

export const Message = () => {
    const message = useEdaStore(state => state.currentMessage);
    const text = message;
    
    const [displayedText, setDisplayedText] = useState("");
    const [isErasing, setIsErasing] = useState(false);

    const clearMessage = useCallback(() => {
        setIsErasing(true);

        return new Promise<void>((resolve) => {
            const timeout = setTimeout(() => {
                setDisplayedText("");
                setIsErasing(false);
                resolve();
            }, ERASE_DELAY);
            return () => clearTimeout(timeout);
        });
    }, []);

    const typeMessage = useCallback((text: string) => {
        let index = 0;
        setDisplayedText("");

        const interval = setInterval(() => {
            if (index >= text.length) {
                clearInterval(interval);
                return;
            }

            const nextChar = text[index];
            setDisplayedText(prev => prev + nextChar);
            index++;
        }, TYPING_SPEED);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let cleanup: (() => void) | undefined;
        let cancelled = false;

        const animate = async () => {
            await clearMessage();

            if (cancelled) return;

            cleanup = typeMessage(text);
        };

        animate();

        return () => {
            cancelled = true;
            if (cleanup) cleanup();
        };
    }, [text, clearMessage, typeMessage])

    return (
        <div className={css.message}>
            <p className={isErasing ? css.erasing : ''}>{displayedText}
                <span className={displayedText.length === text.length ? css.cursor : ''}>|</span>
            </p>
        </div>
    )
}
