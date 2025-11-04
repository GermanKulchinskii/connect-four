
import { GameColumn } from "@/features/GameColumn/GameColumn";
import css from "./GameBoard.module.css";
import useGameStore from "@/entities/Game/model/Model";

interface GameBoardProps {
  useStore?: typeof useGameStore;
}

export const GameBoard = (props: GameBoardProps) => {
  const {useStore: custom} = props;
  const store = custom || useGameStore;
  const { board } = useGameStore();

  return (
    <div className={css.board}>
      {board[0].map((_, colIndex) => (
        <GameColumn key={colIndex} columnIndex={colIndex} useStore={store} />
      ))}
    </div>
  );
};
