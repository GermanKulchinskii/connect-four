import { Button } from "@/shared/ui"
import css from './GameModeButton.module.css';
import { useEdaStore } from "@/entities/Eda";
import { MessageList } from "@/entities/Eda/types/messages";

interface GameModeButtonProps {
    children?: React.ReactNode;
    gameMode?: string;
}

export const GameModeButton = (props: GameModeButtonProps) => {
    const { children, gameMode } = props;

    const setEdaMessage = useEdaStore(state => state.setCurrentMessage);

    const selectGameMode = () => {
        setEdaMessage(MessageList[gameMode as keyof typeof MessageList]);
    }
  
    return (
        <Button 
            className={css.gameModeBtn} 
            onClick={selectGameMode}
        >
            {children}
        </Button>
    )
}