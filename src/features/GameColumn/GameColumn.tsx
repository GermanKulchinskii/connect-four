import { Cell } from "@/entities/Game";
import css from "./GameColumn.module.css";
import useGameStore from "@/entities/Game/model/Model";

interface GameColumnProps {
	columnIndex: number;
	useStore?: typeof useGameStore;
}

export const GameColumn = (props: GameColumnProps) => {
	const {columnIndex, useStore: custom} = props;
	const store = custom || useGameStore;
	const { board, makeMove, winner, playerTurn, gameMode } = store();


	const handleClick = () => {
		if (!winner && (gameMode === "Single" || playerTurn === "First")) makeMove(columnIndex);
	};

	const columnCells = board.map((row) => row[columnIndex]);
	const isColumnFilled = columnCells.every((cell) => cell !== 0);

	return (
		<div className={`${css.column} ${isColumnFilled ? css.filled : ''} ${winner ? css.over : ''}`} onClick={handleClick}>
			{columnCells.map((cellValue, rowIndex) => {
				const player = cellValue === 1 ? "First" : cellValue === 2 ? "Second" : null;
				const isFilled = cellValue !== 0;

				const isTopLeft = (rowIndex === 0 && columnIndex === 0) ? 'topLeft' : '';
				const isTopRight = (rowIndex === 0 && columnIndex === board[0].length - 1) ? 'topRight' : '';
				const isBottomLeft = (rowIndex === board.length - 1 && columnIndex === 0) ? 'bottomLeft' : '';
				const isBottomRight = (rowIndex === board.length - 1 && columnIndex === board[0].length - 1) ? 'bottomRight' : '';

				const isCorner = isTopLeft || isTopRight || isBottomLeft || isBottomRight;

				return (
					<Cell
						key={`${rowIndex}-${columnIndex}`}
						isFilled={isFilled}
						player={player}
						isActive={false}
						className={isCorner ? css[isCorner] : ''}
					/>
				);
			})}
		</div>
	);
};
