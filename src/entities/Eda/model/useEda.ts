import { create } from 'zustand';
import { type Messages, MessageList } from './messages';

interface EdaState {
    currentMessage: Messages,
    isTyping: boolean,

    setCurrentMessage: (message: Messages) => void,
    clearMessage: () => void,
    setIsTyping: (isTyping: boolean) => void,
}

const useEdaStore = create<EdaState>((set) => ({
    currentMessage: MessageList.WELCOME,
    isTyping: false,

    setCurrentMessage: (message) => set({ currentMessage: message }),

    clearMessage: () => set({ currentMessage: MessageList.WELCOME }),

    setIsTyping: (isTyping) => set({ isTyping }),
}))

export default useEdaStore;