import { Eda } from '@/features/Eda';
import css from './EdaGamePage.module.css';
import { OfflineHeader as Header } from '@/widgets/OfflineHeader';
import { GameBoard } from '@/widgets/GameBoard/ui/GameBoard';
import { useEffect } from 'react';
import { useEdaGameStore } from '@/entities/Game/';
import { setupEdaWatcher } from '@/features/EdaWatcher/EdaWatcher';

export const EdaGamePage = () => {
	const { resetGame } = useEdaGameStore();

	useEffect(() => {
		resetGame();
		const unsubscribe = setupEdaWatcher(useEdaGameStore, 'eda');
		return () => unsubscribe();
	}, [resetGame]);

  	return (
	<>
		<Header gameMode='eda' />
		<div className={css.boardWrapper}>
			<GameBoard useStore={useEdaGameStore} />
		</div>
		<Eda className={css.eda} />
	</>
  	);
};
