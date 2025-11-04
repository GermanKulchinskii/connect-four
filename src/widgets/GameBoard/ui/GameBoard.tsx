
import { GameColumn } from "@/features/GameColumn/GameColumn";
import css from "./GameBoard.module.css";
import useGameStore from "@/entities/Game/model/Model";
import { useEffect, useState } from "react";
import { validator } from "@/entities/Game/model/validator";

interface GameBoardProps {
  	useStore?: typeof useGameStore;
}

export const GameBoard = (props: GameBoardProps) => {
	const {useStore: custom} = props;
	const store = custom || useGameStore;
	const { board, gameMode } = useGameStore();
	const [moves, setMoves] = useState<number[]>([]);

	const handleMove = (col: number) => {
		setMoves(prev => [...prev, col]);
  	};

  	useEffect(() => {
		if (gameMode === "Single") {
			console.log("Validator result:", validator(moves));
		}
  	}, [moves, gameMode]);

  	return (
		<div className={css.board}>
			{board[0].map((_, colIndex) => (
				<GameColumn key={colIndex} columnIndex={colIndex} useStore={store} onClick={handleMove}/>
			))}
		</div>
  	);
};