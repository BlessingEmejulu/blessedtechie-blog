"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react"; 
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
   <nav
  className="sticky top-0 w-full border-t-4 border-transparent bg-white
                 bg-[length:100%_4px] bg-top bg-no-repeat
                 flex items-center justify-between px-6 py-3 shadow-md shadow-purple-500/20"
>
    <div className="flex w-full items-center justify-between mx-auto max-w-7xl px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/blessingemejulu.png"
            alt="Logo"
            width={40} 
            height={40}
            className="rounded"
          />
          <p className="text-2xl font-bold gradient-text">
            BlessedTechie</p>  
          </Link>
        </div>

        {/* Links + Toggle */}
        <div className={`flex items-center gap-6`}>
            <Link href="/articles" className="font-bold text-[#5603AD] gradient-underline">
              Articles
            </Link>
            <Link href="/projects" className="font-bold text-[#5603AD] gradient-underline">
              Projects
            </Link>
            <Link href="/contact" className="font-bold text-[#5603AD] gradient-underline">
              Contact
            </Link>

            {/* Toggle Switch */}
           <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 flex items-center justify-center rounded-full px-1 transition-all duration-300 bg-[#5603AD]"
        >
          {theme === "dark" ? (
            <Moon className="text-[#F0FFF1] w-6 h-6" />
          ) : (
            <Sun className="text-[#C2F8CB] w-6 h-6" />
          )}
        </button>
        </div>
    </div>
</nav>
  );
}
