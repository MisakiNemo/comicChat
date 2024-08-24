import {Avatar} from "antd";

const ChatItem = ({data}) => {
  return (
      <div className="chat-item w-full h-16  flex bg-transparent">
        <div className="chat-item-avatar h-full w-auto flex items-center ml-3">
          <Avatar className={"h-12 w-12"} src={data.avatar} />
        </div>
        <div className="chat-item-content">
            <div className={"chat-item-header flex h-4 mb-2 "}>
               <div className={"chat-item-name"}>{data.userName}</div>
                <div className={"chat-item-time ml-auto"}>{data.lastMessageTime}</div>
            </div>
          <p className="chat-item-message">{data.lastMessage}</p>
        </div>
      </div>
  )
}

export default ChatItem;
