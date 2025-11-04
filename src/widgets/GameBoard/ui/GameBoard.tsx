
import { GameColumn } from "@/features/GameColumn/GameColumn";
import css from "./GameBoard.module.css";
import useGameStore from "@/entities/Game/model/Model";

export const GameBoard = () => {
  const { board } = useGameStore();

  return (
    <div className={css.board}>
      {board[0].map((_, colIndex) => (
        <GameColumn key={colIndex} columnIndex={colIndex} />
      ))}
    </div>
  );
};
