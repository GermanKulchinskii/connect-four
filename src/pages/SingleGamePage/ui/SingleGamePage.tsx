import { Eda } from '@/features/Eda';
import css from './SingleGamePage.module.css';
import { OfflineHeader as Header } from '@/widgets/OfflineHeader';
import { GameBoard } from '@/widgets/GameBoard/ui/GameBoard';
import { useEffect } from 'react';
import { setupEdaWatcher } from '@/features/EdaWatcher/EdaWatcher';

export const SingleGamePage = () => {

    useEffect(() => {
        const unsubscribe = setupEdaWatcher();

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <>
            <Header />
            <div className={css.boardWrapper}>
                <GameBoard />
            </div>
            <Eda className={css.eda} />
        </>
    )
}