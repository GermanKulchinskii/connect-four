import { useEdaStore } from "@/entities/Eda";
import { MessageList } from "@/entities/Eda/types/messages";

type GameType = "single" | "eda";

export const setupEdaWatcher = (gameStore: { subscribe: any; getState: any }, gameType: GameType = "single") => {
  	const edaStore = useEdaStore;

  	const unsubscribe = gameStore.subscribe((state: any) => {
		const winner = state.winner;

		if (winner) {

			const { setCurrentMessage, setIsTyping } = edaStore.getState();

			setIsTyping(true);

			setTimeout(() => {
			switch (winner) {
				case "First":
					setCurrentMessage(gameType === "eda" ? MessageList.YOU_WIN_EDA : MessageList.YOU_WIN);
					break;
				case "Second":
					setCurrentMessage(gameType === "eda" ? MessageList.EDA_WINS : MessageList.YOU_LOSE);
					break;
				case "Draw":
					setCurrentMessage(gameType === "eda" ? MessageList.DRAW_EDA : MessageList.DRAW);
					break;
			}

			setIsTyping(false);
			}, 800);
		}
  	});

  	return unsubscribe;
};
