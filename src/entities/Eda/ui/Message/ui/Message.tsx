import { useEffect, useState } from "react";
import css from "./Message.module.css";

interface Props {
    text: string;
    speed?: number;
}

export const Message = (props: Props) => {
    const { text, speed = 50 } = props;

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
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
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className={css.message}>
            {displayedText}
            <span className={displayedText.length === text.length ? css.cursor : ''}>|</span>
        </div>
    )
}
