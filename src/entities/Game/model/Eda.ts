import { checkWinner } from "./Model";

const WIDTH = 7;
const HEIGHT = 6;
type Board = number[][];

export const getBotMove = (board: Board): number => {
	const bot = 2;
	const player = 1;

  	for (let col = 0; col < WIDTH; col++) {
		const row = getNextRow(board, col);
		if (row === -1) continue;

		const tempBoard = board.map(r => [...r]);
		tempBoard[row][col] = bot;
		if (checkWinner(tempBoard) === "Second") return col;
  	}

  	for (let col = 0; col < WIDTH; col++) {
		const row = getNextRow(board, col);
		if (row === -1) continue;

		const tempBoard = board.map(r => [...r]);
		tempBoard[row][col] = player;
		if (checkWinner(tempBoard) === "First") return col;
  	}

  	const availableCols = [];
	for (let col = 0; col < WIDTH; col++) {
		if (getNextRow(board, col) !== -1) availableCols.push(col);
	}

	if (availableCols.length > 0) {
		return availableCols[Math.floor(Math.random() * availableCols.length)];
	}

  	return -1;
};

const getNextRow = (board: Board, col: number) => {
  	for (let row = HEIGHT - 1; row >= 0; row--) {
		if (board[row][col] === 0) return row;
  	}
  	return -1;
};
