"use client";

import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  messages: string[];
}

const Message = ({ messages }: MessageProps) => {
  const [inputText, setInputText] = useState("");
  if (!messages || messages.length === 0) {
    return (
      <div>
        <p>No messages</p>
      </div>
    );
  }
  return (
    <div className="scrollView flex flex-col gap-4 h-full items-center justify-end">
      <div>
        {messages.map((message, index) => {
          return <p key={index}>{message}</p>;
        })}
      </div>
      <div className="flex items-center justify-center gap-2 max-w-[700px] w-full">
        <div className="w-full flex space-x-4 bg-gray-950 rounded-2xl px-5 py-4">
          <Smile />

          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Type a message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <Paperclip />
        </div>
        <div className="flex items-center justify-center bg-red-500 rounded-full p-4">
          {inputText ? (
            <SendHorizontal onClick={() => console.log("Send clicked")} />
          ) : (
            <Mic onClick={() => console.log("Mic clicked")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
