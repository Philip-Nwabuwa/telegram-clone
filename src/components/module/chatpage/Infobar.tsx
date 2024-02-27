"use client";

import { useStore } from "@/store/store";

const Infobar = () => {
  const { showInfobar } = useStore();

  if (!showInfobar) {
    return null;
  }

  return <div>Infobar</div>;
};

export default Infobar;
