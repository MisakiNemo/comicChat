import {Layout} from "antd";
import ChatList from "@/components/Chat/chatSide/chatList/chatList.tsx";
import ChatMain from "@/components/Chat/chatMain/chatMain.tsx";
const ChatPage=  ()=>{
    return (
            <Layout className="h-full">
               <Layout.Sider width={250}>
                   <div className={"h-full bg-sky-400"}>
               <ChatList />
                   </div>
               </Layout.Sider>
                   <Layout.Content>
                       <div className={"h-full bg-red-500"}>
                          <ChatMain />
                       </div>
                   </Layout.Content>
            </Layout>

    )

}

export default ChatPage;