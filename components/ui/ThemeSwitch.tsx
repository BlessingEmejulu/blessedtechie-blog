"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative inline-flex items-center justify-center rounded-md h-10 w-10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
    </button>
  );
}