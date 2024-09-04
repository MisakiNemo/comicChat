import ChatMessageBox from "@/components/Chat/chatMain/MeesageBox/ChatMessageBox.tsx";
import ChatInputBox from "@/components/Chat/chatMain/ChatInputBox/ChatInputBox.tsx";
import "./chatMain.scss";

const chatMain = () => {
  return (
    <div className="chatMainContainer h-full w-full flex flex-col">
      <div className="header h-12 bg-sky-400">12141</div>
      <div className={"chatMainBody w-full "}>
        <ChatMessageBox />
      </div>
      <div className={" h-64 flex-col "}>
        <ChatInputBox />
      </div>
    </div>
    // </div>
  );
};

export default chatMain;
