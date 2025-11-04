import { create } from "zustand";

interface GameState {
	playerTurn: "First" | "Second";
	board: number[][];
	winner: null | "First" | "Second" | "Draw";
	gameMode: 'Single' | 'Eda';
	makeMove: (column: number) => void;
	resetGame: () => void;
	
}

const WIDTH = 7;
const HEIGHT = 6;

const createEmptyBoard = () => Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0));


const useGameStore = create<GameState>((set, get) => ({
	playerTurn: "First",
	board: createEmptyBoard(),
	winner: null,
	gameMode: 'Single',

	makeMove: (column) => {
		const { board, playerTurn, winner } = get();
		if (winner) return;

		const newBoard = board.map((row) => [...row]);

		for (let row = HEIGHT - 1; row >= 0; row--) {
			if (newBoard[row][column] === 0) {
				newBoard[row][column] = playerTurn === "First" ? 1 : 2;

				const newWinner = checkWinner(newBoard);
				set({
					board: newBoard,
					playerTurn: newWinner ? playerTurn : playerTurn === "First" ? "Second" : "First",
					winner: newWinner,
				});
				return;
			}
		}
	},

	resetGame: () => set({ board: createEmptyBoard(), playerTurn: "First", winner: null }),
}));

export default useGameStore;


export const checkWinner = (board: number[][]): GameState["winner"] => {
	const directions = [
		[1, 0],
		[0, 1],
		[1, 1],
		[1, -1],
	];

	for (let y = 0; y < HEIGHT; y++) {
		for (let x = 0; x < WIDTH; x++) {
			const cell = board[y][x];
			if (cell === 0) continue;

			for (const [dx, dy] of directions) {
				const endX = x + dx * 3;
				const endY = y + dy * 3;
				if (endX < 0 || endX >= WIDTH || endY < 0 || endY >= HEIGHT) continue;

				let count = 0;
				for (let step = 0; step < 4; step++) {
					if (board[y + dy * step][x + dx * step] === cell) {
						count++;
					} else {
						break;
					}
				}

				if (count === 4) return cell === 1 ? "First" : "Second";
			}
		}
	}

	if (board.every(row => row.every(cell => cell !== 0))) return "Draw";

	return null;
};