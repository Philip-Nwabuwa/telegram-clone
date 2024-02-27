import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ScrollArea } from "../../ui/scroll-area";
import { Plus, UserRound, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Icons } from "../../common/Icons";

interface ChatProps {
  chats: {
    id: string;
    name: string;
    avatar: string;
    time: string;
    message: string;
    unread: number;
    avatarUrl: string;
  }[];
}

interface ContactProps {
  contacts: {
    id: string;
    name: string;
    avatar: string;
    lastSeen: string;
    avatarUrl: string;
  }[];
}

type SidebarProps = ChatProps & ContactProps;

const SidebarList = ({ chats, contacts }: SidebarProps) => {
  if (!chats) {
    return (
      <div>
        <p>No chats</p>
      </div>
    );
  }

  if (!contacts) {
    return (
      <div>
        <p>No contacts</p>
      </div>
    );
  }
  return (
    <div className="relative">
      <ScrollArea className="w-full scrollView pr-4">
        {chats.map((chat) => {
          const { id, name, avatarUrl, avatar, time, unread, message } = chat;

          return (
            <Link key={id} href={`/chat/${id}`}>
              <div className="w-full flex items-center gap-3 p-2 rounded-2xl hover:bg-black/70">
                <Avatar className="h-[54px] w-[54px]">
                  <AvatarImage src={avatarUrl} alt="@shadcn" />
                  <AvatarFallback>{avatar}</AvatarFallback>
                </Avatar>
                <div className="w-full flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[16px]">{name}</h2>
                    <p className="text-[12px] text-[#aaaaaa]">{time}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] text-[#aaaaaa]">{message}</p>
                    {unread > 0 && (
                      <p className="text-[12px] px-[6px] bg-red-500 rounded-full">
                        {unread}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        {chats.length <= 10 && (
          <div className="mt-4">
            <h3 className="text-red-500">Contacts</h3>
            {contacts.map((contact) => {
              const { id, name, avatarUrl, avatar, lastSeen } = contact;
              return (
                <Link key={id} href={`/chat/${id}`}>
                  <div className="w-full flex items-center gap-3 p-2 rounded-2xl hover:bg-black/70">
                    <Avatar className="h-[54px] w-[54px]">
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
                </Link>
              );
            })}
          </div>
        )}
      </ScrollArea>
      <div className="absolute bottom-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="p-2 rounded-full bg-red-500 border-none"
            >
              <Plus />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[150px] mb-1 mr-12">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex items-center gap-2 text-[12px]">
                <Icons.channel className="w-4 h-4" /> New Channel
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-[12px]">
                <Users className="w-4 h-4" /> New Group
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-[12px]">
                <UserRound className="w-4 h-4" /> New Private Chat
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SidebarList;
