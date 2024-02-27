import Topbar from "../sidebar/Topbar";
import SidebarList from "../sidebar/SidebarList";

const Sidebar = () => {
  const chats = [
    {
      id: "1",
      name: "John Doe",
      avatar: "jd",
      time: "13:47",
      message: "Hey, how's it going?",
      unread: 0,
      avatarUrl: "https://avatars.githubusercontent.com/u/1319080?v=4",
    },
    // {
    //   id: "4",
    //   name: "Sara Lee",
    //   avatar: "sl",
    //   time: "2/17/2023",
    //   message: "Hi there, long time no see!",
    //   unread: 0,
    //   avatarUrl: "https://randomuser.me/api/portraits/women/79.jpg",
    // },
    // {
    //   id: "5",
    //   name: "Tyler Nguyen",
    //   avatar: "tn",
    //   time: "2/16/2023",
    //   message: "Hey, did you get my last message?",
    //   unread: 1,
    //   avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    // },
    // {
    //   id: "6",
    //   name: "Alexa Richardson",
    //   avatar: "ar",
    //   time: "2/15/2023",
    //   message: "Wanted to check in and see how you're doing",
    //   unread: 0,
    //   avatarUrl: "https://randomuser.me/api/portraits/women/60.jpg",
    // },
    // {
    //   id: "7",
    //   name: "Chris Davis",
    //   avatar: "cd",
    //   time: "2/14/2023",
    //   message: "Happy Valentine's Day!",
    //   unread: 5,
    //   avatarUrl: "https://randomuser.me/api/portraits/men/89.jpg",
    // },
    // {
    //   id: "8",
    //   name: "Jamie Miller",
    //   avatar: "jm",
    //   time: "2/13/2023",
    //   message: "Did you finish the report?",
    //   unread: 2,
    //   avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    // },
    // {
    //   id: "9",
    //   name: "Jordan Lee",
    //   avatar: "jl",
    //   time: "2/12/2023",
    //   message: "Let me know if you need any help!",
    //   unread: 0,
    //   avatarUrl: "https://randomuser.me/api/portraits/men/62.jpg",
    // },
    // {
    //   id: "10",
    //   name: "Taylor Johnson",
    //   avatar: "tj",
    //   time: "2/11/2023",
    //   message: "Can you send me the meeting notes?",
    //   unread: 1,
    //   avatarUrl: "https://randomuser.me/api/portraits/women/60.jpg",
    // },
    // {
    //   id: "11",
    //   name: "Alex Miller",
    //   avatar: "am",
    //   time: "2/10/2023",
    //   message: "How's your week going?",
    //   unread: 4,
    //   avatarUrl: "https://randomuser.me/api/portraits/men/87.jpg",
    // },
    // {
    //   id: "12",
    //   name: "Jessica Davis",
    //   avatar: "jd",
    //   time: "2/9/2023",
    //   message: "Let's meet tomorrow at 10 AM",
    //   unread: 0,
    //   avatarUrl: "https://randomuser.me/api/portraits/women/85.jpg",
    // },
    {
      id: "13",
      name: "Michael Rodriguez",
      avatar: "mr",
      time: "2/8/2023",
      message: "Did you see my email?",
      unread: 3,
      avatarUrl: "https://randomuser.me/api/portraits/men/28.jpg",
    },
  ];
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      avatar: "jd",
      lastSeen: "last seen 2 hours ago",
      avatarUrl: "https://avatars.githubusercontent.com/u/1319080?v=4",
    },
  ];
  return (
    <aside className="w-[350px] min-w-[350px] border-r min-h-screen p-4">
      <Topbar />
      <div className="mt-2">
        <SidebarList chats={chats} contacts={contacts} />
      </div>
    </aside>
  );
};

export default Sidebar;
