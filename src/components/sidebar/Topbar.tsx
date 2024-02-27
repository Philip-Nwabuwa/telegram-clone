import {
  BookMarked,
  CircleUserRound,
  HelpCircle,
  LogOut,
  Menu,
  MoonStar,
  Settings2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import DarkmodeSwitch from "../common/DarkmodeSwitch";

const Topbar = () => {
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-2 rounded-full border-none">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center gap-2">
              <BookMarked /> Saved Messages
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <CircleUserRound /> Contacts
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Settings2 /> Settings
            </DropdownMenuItem>
            <div className="flex items-center justify-between relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              <div className="flex items-center gap-2">
                <MoonStar /> Dark Mode
              </div>
              <DarkmodeSwitch />
            </div>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex items-center gap-2">
            <HelpCircle /> Feature
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-red-500">
            <LogOut /> Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        type="text"
        placeholder="Search"
        className="rounded-full hover:ring-2 hover:ring-accent-foreground"
      />
    </div>
  );
};

export default Topbar;
