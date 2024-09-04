import { Button, message } from "antd";
import "./ChatInputBox.scss";
import { useRef } from "react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";

const ChatInputBox = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageUploadRef = useRef<HTMLInputElement>(null);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  // const handleEmojiPickerToggle = () => {
  //   setShowEmojiPicker(!showEmojiPicker);
  // };
  // const handleShowEmojiPicker = (emoji: { native: string }) => {
  //   if (contentRef.current) {
  //     contentRef.current.insertAdjacentHTML("beforeend", emoji.native);
  //     contentRef.current.focus();
  //     setShowEmojiPicker(false);
  //   }
  // };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result as string;
        contentRef.current?.insertAdjacentHTML(
          "beforeend",
          `<img src="${base64}" className="max-w-5rem inline-block align-middle" alt="Uploaded Image" />`,
        );
        contentRef.current?.focus();
      };
    }
  };
  // const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
  //     //如果有图片，则禁止粘贴并提示
  //     if (e.clipboardData.items && e.clipboardData.items.length > 0) {
  //         const item = e.clipboardData.items[0];
  //         if (item.type.indexOf('image') !== -1) {
  //             e.preventDefault();
  //             message.warning('Please upload images instead of pasting them');
  //         }
  //     }
  // };

  const handleSendMessage = () => {
    const messageContent = contentRef.current?.innerHTML.trim();
    if (!messageContent || messageContent === "<br>") {
      message.warning("Please enter a message to send");
      return;
    }
    console.log(messageContent);
    if (contentRef.current) {
      contentRef.current.innerHTML = "";
    }
  };

  return (
    <div className="chatInputBoxContainer h-auto w-full">
      <div className={"w-full bg-sky-400 h-10 flex items-center "}>
        {/*<div className="relative inline-block emojiBox ">*/}
        {/*  /!*<Button*!/*/}
        {/*  /!*  className={"bg-transparent h-full  text-xl"}*!/*/}
        {/*  /!*  onClick={handleEmojiPickerToggle}*!/*/}
        {/*  /!*>*!/*/}
        {/*  /!*  😊*!/*/}
        {/*  /!*</Button>*!/*/}
        {/*  {showEmojiPicker && (*/}
        {/*    <div className="absolute bottom-full left-0 transform -translate-y-2 z-50">*/}
        {/*      <Picker*/}
        {/*        data={data}*/}
        {/*        onEmojiSelect={handleShowEmojiPicker}*/}
        {/*        previewPosition={"none"}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className="relative inline-block">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={imageUploadRef}
          />
          <Button
            className={"bg-transparent h-full  text-xl"}
            onClick={() => imageUploadRef.current?.click()}
          >
            📷
          </Button>
        </div>
        <div></div>
      </div>
      <div className={"chatsInputBox"}>
        <div
          ref={contentRef}
          className="chatInput w-full inline-block "
          contentEditable
          style={{
            border: "1px solid #ccc",
            minHeight: "10rem",
            padding: "8px",
          }}
          // onPaste={handlePaste}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "Enter") {
              console.log("enter");
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button
          type="primary"
          onClick={handleSendMessage}
          className="chatSendBtn"
        >
          Send
        </Button>
      </div>
    </div>
  );
};
export default ChatInputBox;
