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
      <h1>Chat: {params.chatid}</h1>
    </div>
  );
};

export default MainContent;
