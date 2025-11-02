export const MessageList = {
    WELCOME: "Ну, привет",
    INVALID_MOVE: "Ты не понял как играть в детскую игру?",
    SINGLE_GAME_WON: ")))))))))))))))",
    SINGLE_GAME_LOST: "Я всё равно не поверю, что друзья у тебя есть",
    SINGLE_PLAYER: "Ты признал, что у тебя нет друзей, чтобы играть с ними?",
    MULTI_PLAYER: "Да, да, у тебя есть друзья, конечно...",
    VERSUS_EDA: "Знаешь, что сказал Иисус в пятой главе Евангелия от Иоанна? Он сказал: Не создавай мне здесь проблем, с****",
    EMPTY_MODE: "Тебе трех режимов мало?",
    EDA_AVATAR_HOVER: "Чего тебе?",
    MESSAGE_404: "Заблудился в четырех кнопках?",
} as const;

export type Messages = typeof MessageList[keyof typeof MessageList];