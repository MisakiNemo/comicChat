import {Avatar} from "antd"
import "./ChatMessageBox.scss"


interface chatMessage{
    id: number;
    sender: string;
    message: string;
    time: string;
    avatar: string;
}

const messages: chatMessage[] = [
    {
        id: 1,
        sender: "John Doe",
        message: "Hello, how are you?sadadasdasdsasdas",
        time: "12:30 PM",
        avatar: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        sender: "John Doe",
        message: "I'm doing well, how about you?",
        time: "12:35 PM",
        avatar: "https://via.placeholder.com/150"
    }
]
const ChatMessageBox = () => {
    return (
        <div className="message-box h-full">
            <div className="message-box-body">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message-box-item ${message.id === 1 ? 'text-right' : 'text-left'}`}
                    >
                        {message.id === 1 ? (
                            <>
                                <div className="message-bubble text-right pl-4">
                                    <p>{message.message}</p>
                                </div>
                                <div className="message-avatar">
                                    <Avatar src={message.avatar} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="message-avatar">
                                    <Avatar src={message.avatar} />
                                </div>
                                <div className="message-bubble text-left pr-4">
                                    <div className="message-header">
                                        <h4>{message.sender}</h4>
                                        <p>{message.time}</p>
                                    </div>
                                    <p>{message.message}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatMessageBox;
