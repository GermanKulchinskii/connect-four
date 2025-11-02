export const MessageList = {
    WELCOME: "Ну, привет",
    INVALID_MOVE: "Ты не понял как играть в детскую игру?",
    SINGLE_GAME_WON: ")))))))))))))))",
    SINGLE_GAME_LOST: "Я всё равно не поверю, что друзья у тебя есть",
    SINGLE_PLAYER: "Ты признал, что у тебя нет друзей, чтобы играть с ними?",
    MULTI_PLAYER: "Да, да, у тебя есть друзья, конечно...",
    EDA_AVATAR_HOVER: "Чего тебе?",
} as const;

export type Messages = typeof MessageList[keyof typeof MessageList];