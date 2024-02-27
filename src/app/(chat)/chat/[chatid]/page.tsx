import Header from "@/components/module/chatpage/Header";
import Infobar from "@/components/module/chatpage/Infobar";
import Message from "@/components/module/chatpage/Message";

const MainContent = ({ params }: { params: { chatid: string } }) => {
  const chatid = params.chatid;

  if (chatid === "") {
    return (
      <div>
        <h1>Chat: No chat selected</h1>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Message />
      <Infobar />
    </div>
  );
};

export default MainContent;
