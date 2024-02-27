import Sidebar from "@/components/module/Sidebar";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-between">
      <Sidebar />
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
