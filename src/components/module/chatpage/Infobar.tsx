"use client";

import { useStore } from "@/store/store";

const Infobar = () => {
  const { showInfobar } = useStore();

  if (!showInfobar) {
    return null;
  }

  return <div className="w-[300px] h-screen bg-gray-950">Infobar</div>;
};

export default Infobar;
