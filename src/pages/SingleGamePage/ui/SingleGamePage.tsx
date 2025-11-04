import { Eda } from '@/features/Eda';
import css from './SingleGamePage.module.css';
import { OfflineHeader as Header } from '@/widgets/OfflineHeader';
import { GameBoard } from '@/widgets/GameBoard/ui/GameBoard';
import { useEffect } from 'react';
import { setupEdaWatcher } from '@/features/EdaWatcher/EdaWatcher';
import useGameStore from '@/entities/Game/model/Model';

export const SingleGamePage = () => {

    useEffect(() => {
        const unsubscribe = setupEdaWatcher(useGameStore);

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <>
            <Header gameMode='solo' />
            <div className={css.boardWrapper}>
                <GameBoard />
            </div>
            <Eda className={css.eda} />
        </>
    )
}