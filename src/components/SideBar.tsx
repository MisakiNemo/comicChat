import  { type MenuProps, Menu, Avatar} from "antd";
import {useNavigate} from "react-router-dom";
import  "./SideBar.scss";
import chatIcon from "@/assets/images/chat.png";
import communityIcon from "@/assets/images/community.png";
import videoIcon from "@/assets/images/video.png";
import {useState} from "react";

interface Item {
    key: string;
    label: string;
    icon: React.ReactNode;
}

const items: Item[]  = [
    {
        key: "chat",
        label: "chat",
        icon: <img src={chatIcon} alt="chat" className="w-auto h-auto" />
    },
    {
        key: "community",
        label: "Community",
        icon: <img src={communityIcon} alt="community" className="w-auto h-auto" />
    },
    {
        key: "video",
        label: "Video",
        icon: <img src={videoIcon} alt="video" className="w-auto h-auto" />
    }
]



const SideBar = () => {
    const [current, setCurrent] = useState("chat")
    const Navigate = useNavigate();
    const onClick: MenuProps["onClick"] = (e) => {
        console.log(e.key);
        Navigate("/"+e.key);
        setCurrent(e.key);
    }
    return (
        <div className={"bg-pink-50 w-full h-full text-center overflow-hidden"}>
        <Avatar className={"m-auto w-10 h-10 mb-2 mt-2"} />
        <Menu className={"bg-transparent sideBarMenu"} selectedKeys={[current]} mode="inline">
            {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon} onClick={onClick}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
        </div>
    )
}



export default SideBar