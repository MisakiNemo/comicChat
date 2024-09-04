import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum MessageType {
  TEXT = 0,
  IMAGE = 1,
  VIDEO = 2,
  VOICE = 3,
}

export interface TextContent {
  type: MessageType.TEXT;
  content: string;
}

export interface ImageContent {
  type: MessageType.IMAGE;
  url: string;
}

export interface VideoContent {
  type: MessageType.VIDEO;
  url: string;
}

export interface VoiceContent {
  type: MessageType.VOICE;
  url: string;
}

export type ContentType =
  | TextContent
  | ImageContent
  | VideoContent
  | VoiceContent;

export interface Message {
  chatId: string;
  messageId: string;
  content: ContentType;
  sender: string;
  timestamp: number;
}

export interface Chat {
  messages: Message[];
  ChatId: string;
}

export interface ChatState {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  removeChat: (chatId: number) => void;
  getChat: (chatId: number) => Chat;
  addMessage: (chatId: number, message: Message) => void;
  removeMessage: (chatId: number, messageId: number) => void;
  updateMessage: (chatId: number, message: Message) => void;
  getMessages: (chatId: number, messageId: number) => Message[];
}

const ChatStore = createSlice({
  name: "chat",
  initialState: {
    chats: [] as Chat[],
  },
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(
        (chat) => chat.ChatId !== action.payload,
      );
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const chat = state.chats.find(
        (chat) => chat.ChatId === action.payload.chatId,
      );
      if (chat) {
        chat.messages.push(action.payload);
      }
    },
    removeMessage: (state, action: PayloadAction<Message>) => {
      const chat = state.chats.find(
        (chat) => chat.ChatId === action.payload.chatId,
      );
      if (chat) {
        chat.messages = chat.messages.filter(
          (message) => message.messageId !== action.payload.messageId,
        );
      }
    },
    updateMessage: (
      state,
      action: PayloadAction<{ chatId: string; message: Message }>,
    ) => {
      const chat = state.chats.find(
        (chat) => chat.ChatId === action.payload.chatId,
      );
      if (chat) {
        const messageIndex = chat.messages.findIndex(
          (message) => message.messageId === action.payload.message.messageId,
        );
        if (messageIndex !== -1) {
          chat.messages[messageIndex] = action.payload.message;
        }
      }
    },
  },
});

export const { addChat, removeChat, addMessage, removeMessage, updateMessage } =
  ChatStore.actions;
