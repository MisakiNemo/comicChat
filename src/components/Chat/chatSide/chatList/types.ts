interface ChatItemType {
  id: number;
  userName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isGroup: boolean;
  Avatar: string;
}

export default ChatItemType;
