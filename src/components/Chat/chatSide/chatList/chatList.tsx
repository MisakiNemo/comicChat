import './chatList.scss'
import {Input, Button, Menu}from "antd";
//导入plus图标
import {PlusOutlined} from '@ant-design/icons';
import ChatItem from "@/components/Chat/chatSide/chatItem/chatItem.tsx";
interface ChatItemData{
    id:number,
    userName:string,
    lastMessage:string,
    lastMessageTime:string,
    unreadCount:number,
    isGroup:boolean
    Avatar:string
}


const ChatList = () => {
    const chatList:ChatItemData[] = [
        {
            id: 1,
            userName: "Group Chat",
            lastMessage: "Hello, how are you?",
            lastMessageTime: "10:00",
            unreadCount: 0,
            isGroup: true,
            Avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        },
        {
            id: 2,
            userName: "John Doe",
            lastMessage: "Hey, what's up?",
            lastMessageTime: "10:05",
            unreadCount: 1,
            isGroup: false,
            Avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        },
        {
            id: 3,
            userName: "Jane Doe",
            lastMessage: "I'm fine, how about you?",
            lastMessageTime: "10:10",
            unreadCount: 0,
            isGroup: false,
            Avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        },
        {
            id: 4,
            userName: "Group Chat",
            lastMessage: "Hey, what's up?",
            lastMessageTime: "10:05",
            unreadCount: 1,
            isGroup: true,
            Avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        },
        {
            id: 5,
            userName: "John Doe",
            lastMessage: "I'm fine, how about you?",
            lastMessageTime: "10:10",
            unreadCount: 0,
            isGroup: false,
            Avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        },
    ]

    return (
        <div className={"h-full w-full bg-red-100"}>
            <div className={"h-10 flex "}>
                <Input  className={" h-full w-4/5 border-t-0 border-l-0 border-b-0 bg-sky-400 searchInput"} placeholder={"Search"} />
                <Button className={"h-full w-1/5"}> <PlusOutlined /> </Button>
                </div>
            <div className={"ContactList max-h-screen overflow-hidden"}>
                <Menu defaultSelectedKeys={['1']} className={"h-full w-full chatMenu "} mode={"inline"}>
                {chatList.map((item, index) => {
                    return (
                            <Menu.Item className={"chatItem"} style={{ background: "red" , height: "100%"}} key={index} >
                                <ChatItem data={item} />
                            </Menu.Item>
                    )
                })}
                </Menu>

            </div>
        </div>
    )
}

export default ChatList;