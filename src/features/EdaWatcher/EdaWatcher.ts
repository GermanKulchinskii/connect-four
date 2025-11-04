import { useEdaStore } from "@/entities/Eda";
import useGameStore from "@/entities/Game/model/Model";
import { MessageList } from "@/entities/Eda/types/messages";

export const setupEdaWatcher = () => {
  const gameStore = useGameStore;
  const edaStore = useEdaStore;

  let prevWinner: ReturnType<typeof gameStore.getState>["winner"] = null;

  const unsubscribe = gameStore.subscribe((state) => {
    const winner = state.winner;

    if (winner && winner !== prevWinner) {
      prevWinner = winner;

      const { setCurrentMessage, setIsTyping } = edaStore.getState();

      setIsTyping(true);

      setTimeout(() => {
        switch (winner) {
          case "First":
            setCurrentMessage(MessageList.YOU_WIN);
            break;
          case "Second":
            setCurrentMessage(MessageList.YOU_LOSE);
            break;
          case "Draw":
            setCurrentMessage(MessageList.DRAW);
            break;
        }

        setIsTyping(false);
      }, 800);
    }

    prevWinner = winner;
  });

  return unsubscribe;
};
