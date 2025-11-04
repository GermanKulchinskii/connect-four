import { create } from "zustand";
import { getBotMove } from "./Eda";
import { checkWinner } from "./Model";

const WIDTH = 7;
const HEIGHT = 6;
const createEmptyBoard = () => Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0));

interface EdaGameState {
  playerTurn: "First" | "Second";
  board: number[][];
  winner: null | "First" | "Second" | "Draw";
  gameMode: 'Eda',
  makeMove: (column: number) => void;
  resetGame: () => void;
}

export const useEdaGameStore = create<EdaGameState>((set, get) => ({
	playerTurn: "First",
	board: createEmptyBoard(),
	winner: null,
	gameMode: 'Eda',

  	makeMove: (column) => {
    	const { board, playerTurn, winner } = get();
    	if (winner) return;

    	const newBoard = board.map(row => [...row]);
		for (let row = HEIGHT - 1; row >= 0; row--) {
			if (newBoard[row][column] === 0) {
				newBoard[row][column] = playerTurn === "First" ? 1 : 2;
				break;
			}
		}

		const newWinner = checkWinner(newBoard);

		set({
			board: newBoard,
			playerTurn: newWinner ? playerTurn : playerTurn === "First" ? "Second" : "First",
			winner: newWinner,
		});

		if (!newWinner && playerTurn === "First") {
			const botCol = getBotMove(newBoard);
			if (botCol !== -1) {
				setTimeout(() => get().makeMove(botCol), 200);
			}
		}
  	},

  	resetGame: () => set({ board: createEmptyBoard(), playerTurn: "First", winner: null }),
}));
