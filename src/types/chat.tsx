export interface ChatProps {
  chats: {
    id: string;
    name: string;
    avatar: string;
    time: string;
    lastSeen: string;
    messages: string[];
    unread: number;
    avatarUrl: string;
  }[];
}
