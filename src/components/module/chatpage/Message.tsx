interface MessageProps {
  messages: string[];
}

const Message = ({ messages }: MessageProps) => {
  if (!messages || messages.length === 0) {
    return (
      <div>
        <p>No messages</p>
      </div>
    );
  }
  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>{message}</p>;
      })}
    </div>
  );
};

export default Message;
