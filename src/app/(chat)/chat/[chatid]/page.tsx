import Header from "@/components/module/chatpage/Header";
import Infobar from "@/components/module/chatpage/Infobar";
import Message from "@/components/module/chatpage/Message";
import { chats } from "@/data/chats";

const MainContent = ({ params }: { params: { chatid: string } }) => {
  const chatid = params.chatid;

  const chat = chats.find((c) => c.id === chatid);

  if (chatid === "") {
    return (
      <div>
        <h1>Chat: No chat selected</h1>
      </div>
    );
  }

  const messages = chat?.messages;

  return (
    <div className="flex">
      <div className="w-full">
        <Header chat={chat!} />
        <Message messages={messages!} />
      </div>
      <div>
        <Infobar />
      </div>
    </div>
  );
};

export default MainContent;
