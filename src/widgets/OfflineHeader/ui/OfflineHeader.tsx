import { PlayerNumber, RestartButton } from '@/shared/ui';
import css from './OfflineHeader.module.css';
import useGameStore from '@/entities/Game/model/Model';
import { ToLandingBtn } from '@/features/ToLandingBtn';
import { useCallback } from 'react';
import { useEdaStore } from '@/entities/Eda';
import { MessageList } from '@/entities/Eda/types/messages';

export const OfflineHeader = () => {
    const {resetGame, playerTurn} = useGameStore()
    const {setCurrentMessage} = useEdaStore()

    const restartGame = useCallback(() => {
        setCurrentMessage(MessageList.RESTART)
        resetGame();
    }, [])

    const toLandingListener = useCallback(() => {
        setCurrentMessage(MessageList.LEAVE)
        resetGame()
    }, [])

    return (
        <header className={css.header}>
            <ToLandingBtn onClick={toLandingListener} />
            <div className={css.playersNumbers}>
                <PlayerNumber isActive={playerTurn === 'First'}>Ⅰ</PlayerNumber>
                <PlayerNumber isActive={playerTurn === 'Second'}>Ⅱ</PlayerNumber>
            </div>
            <RestartButton restart={restartGame} />
        </header>
    )
}