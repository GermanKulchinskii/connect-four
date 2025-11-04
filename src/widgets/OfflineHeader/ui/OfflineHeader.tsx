import { PlayerNumber, RestartButton } from '@/shared/ui';
import css from './OfflineHeader.module.css';
import useGameStore from '@/entities/Game/model/Model';
import { ToLandingBtn } from '@/features/ToLandingBtn';
import { useCallback } from 'react';
import { useEdaStore } from '@/entities/Eda';
import { MessageList } from '@/entities/Eda/types/messages';
import { useLocation } from 'react-router';
import { useEdaGameStore } from '@/entities/Game';

interface HeaderProps {
    gameMode: string;
}

export const OfflineHeader = (props: HeaderProps) => {
    const {gameMode} = props;
    const {resetGame, playerTurn} = useGameStore()
    const {setCurrentMessage} = useEdaStore()
    const {resetGame: resetEdaGame} = useEdaGameStore()
    const location = useLocation();

    const restartGame = useCallback(() => {
        setCurrentMessage(MessageList.RESTART)
        gameMode === 'solo' ? resetGame() : resetEdaGame()
    }, [])

    const toLandingListener = useCallback(() => {
        setCurrentMessage(MessageList.LEAVE)
        gameMode === 'solo' ? resetGame() : resetEdaGame()
    }, [])

    return (
        <header className={css.header}>
            <ToLandingBtn onClick={toLandingListener} />
            {location.pathname !== '/multi-game-setup' &&
                (
                <><div className={css.playersNumbers}>
                    <PlayerNumber isActive={playerTurn === 'First'}>Ⅰ</PlayerNumber>
                    <PlayerNumber isActive={playerTurn === 'Second'}>Ⅱ</PlayerNumber>
                </div>
                <RestartButton restart={restartGame} />
                </>)
            }
        </header>
    )
}