import Chats from "../sidebar/Chats";
import Contacts from "../sidebar/Contacts";
import Topbar from "../sidebar/Topbar";

const Sidebar = () => {
  return (
    <aside className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <Topbar />
      <Chats />
      <Contacts />
    </aside>
  );
};

export default Sidebar;
