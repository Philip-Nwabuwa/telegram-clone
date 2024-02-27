"use client";

import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const toggleInfobar = useStore((state) => state.toggleInfobar);
  const setShowInfobar = useStore((state) => state.setShowInfobar);

  const route = useRouter();

  useEffect(() => {
    setShowInfobar(false);
  }, [route]);

  return <button onClick={toggleInfobar}>Toggle Infobar</button>;
};

export default Header;
