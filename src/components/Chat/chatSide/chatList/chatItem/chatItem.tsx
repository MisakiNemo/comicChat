import { Avatar } from "antd";
import "./chatItem.scss";
import type ChatItemType from "@/components/Chat/chatSide/chatList/types.ts";

interface ChatItemProps {
  data: ChatItemType;
}

const ChatItem = ({ data }: ChatItemProps) => {
  return (
    <div className="chat-item w-full h-16  flex bg-transparent">
      <div className="chat-item-avatar h-full w-auto flex items-center ml-3">
        <Avatar className={"h-12 w-12"} src={data.Avatar} />
      </div>
      <div className="chat-item-content w-3/5">
        <div
          className={
            "chat-item-header h-4  flex items-center justify-between  w-full  "
          }
        >
          <div className={"chat-item-name"}>{data.userName}</div>
          <div className={"chat-item-time"}>{data.lastMessageTime}</div>
        </div>
        <div className="chat-item-message w-full">{data.lastMessage}</div>
      </div>
    </div>
  );
};

export default ChatItem;
