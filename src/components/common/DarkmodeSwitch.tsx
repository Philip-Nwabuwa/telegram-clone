"use client";

import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import { useEffect } from "react";

const DarkmodeSwitch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return <Switch checked={theme === "dark"} onClick={toggleTheme} />;
};

export default DarkmodeSwitch;
