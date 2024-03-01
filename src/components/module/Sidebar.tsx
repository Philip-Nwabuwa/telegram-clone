import Topbar from "./sidebar/Topbar";
import SidebarList from "./sidebar/SidebarList";

import { chats } from "@/data/chats";
import { contacts } from "@/data/chats";

const Sidebar = () => {
  return (
    <aside className="bg-gray-950 w-[400px] min-w-[400px] border-r min-h-screen p-4">
      <Topbar />
      <div className="mt-2">
        <SidebarList chats={chats} contacts={contacts} />
      </div>
    </aside>
  );
};

export default Sidebar;
