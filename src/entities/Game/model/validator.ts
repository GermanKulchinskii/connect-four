import { HEIGHT, WIDTH } from "./Model";

export type Coord = [number, number];

export interface StepState {
    player_1: Coord[];
    player_2: Coord[];
    board_state: 'waiting' | 'pending' | 'win' | 'draw';
    winner?: {
        who: 'player 1' | 'player 2';
        positions: Coord[];
    };
}

const directions: Coord[] = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
];

export const checkWin = (board: number[][], player: 1 | 2): Coord[] | null => {
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            if (board[row][col] !== player) continue;
            for (const [rowDir, colDir] of directions) {
                const line: Coord[] = [];
                for (let i = 0; i < 4; i++) {
                    const newRow = row + rowDir * i, newCol = col + colDir * i;
                    if (newRow < 0 || newRow >= HEIGHT || newCol < 0 || newCol >= WIDTH || board[newRow][newCol] !== player) break;
                    line.push([newRow, newCol]);
                }
                if (line.length === 4) return line;
            }
        }
    }
    return null;
};

export const validator = (steps: number[]) => {
    const board: number[][] = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0));
    const result: Record<string, StepState> = { step_0: { player_1: [], player_2: [], board_state: 'waiting' } };
    const moves: Coord[][] = [[], []];
    let finished = false;

    for (let i = 0; i < steps.length && !finished; i++) {
        const col = steps[i];
        const player = i % 2;
        let row = HEIGHT - 1;
        while (row >= 0 && board[row][col]) row--;

        board[row][col] = player + 1;
        moves[player].push([row, col]);

        let board_state: StepState['board_state'] = 'pending';
        let winner: StepState['winner'] | undefined;

        const winningPositions = checkWin(board, (player + 1) as 1 | 2);
        if (winningPositions) {
            board_state = 'win';
            winner = { who: player === 0 ? 'player 1' : 'player 2', positions: winningPositions };
            finished = true;
        } else if (board.every(r => r.every(c => c))) {
            board_state = 'draw';
            finished = true;
        }

        result[`step_${i + 1}`] = { player_1: [...moves[0]], player_2: [...moves[1]], board_state, ...(winner && { winner }) };
    }

    return result;
};
