"use client";

import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ChatProps {
  chat: {
    id: string;
    name: string;
    avatar: string;
    time: string;
    lastSeen: string;
    messages: string[];
    unread: number;
    avatarUrl: string;
  };
}

const Header = ({ chat }: ChatProps) => {
  const toggleInfobar = useStore((state) => state.toggleInfobar);
  const setShowInfobar = useStore((state) => state.setShowInfobar);

  const route = useRouter();

  useEffect(() => {
    setShowInfobar(false);
  }, [route]);

  const { id, name, avatarUrl, avatar, lastSeen } = chat;

  if (!chat) {
    return (
      <div>
        <p>No Info Avalible</p>
      </div>
    );
  }

  return (
    <div className="h-[56px] px-4 flex items-center justify-between bg-gray-950">
      <div key={id} onClick={toggleInfobar}>
        <div className="w-full flex items-center gap-3 p-2 cursor-pointer">
          <Avatar className="h-[42px] w-[42px]">
            <AvatarImage src={avatarUrl} alt="@shadcn" />
            <AvatarFallback>{avatar}</AvatarFallback>
          </Avatar>
          <div className="w-full flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px]">{name}</h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#aaaaaa]">{lastSeen}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 ">
        <Button variant={"outline"} className="rounded-full">
          <Phone />
        </Button>
        <Button variant={"outline"} className="rounded-full">
          <Video />
        </Button>
        <div>
          <MoreVertical />
        </div>
      </div>
    </div>
  );
};

export default Header;
