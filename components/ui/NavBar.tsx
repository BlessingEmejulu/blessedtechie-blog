// components/NavBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sun, Moon } from "lucide-react"; 
import { Geist_Mono as GeistMonoFont } from "next/font/google";

const geistMono = GeistMonoFont({ subsets: ["latin"] });

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   <nav
  className="sticky top-0 w-full border-t-4 border-transparent bg-white
                 bg-[length:100%_4px] bg-top bg-no-repeat
                 flex items-center justify-between px-6 py-3 shadow-md shadow-purple-500/20"
>
    <div className="flex w-full items-center justify-between mx-auto max-w-7xl px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/blessingemejulu.png"
            alt="Logo"
            width={40} 
            height={40}
            className="rounded"
          />
        </div>

        {/* Links + Toggle */}
        <div className={`${geistMono.className} flex items-center gap-6`}>
            <Link href="/articles" className="text-purple-900 hover:underline">
              Articles
            </Link>
            <Link href="/projects" className="text-purple-900 hover:underline">
              Projects
            </Link>
            <Link href="/contact" className="text-purple-900 hover:underline">
              Contact
            </Link>

            {/* Toggle Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 flex items-center rounded-full px-1 transition-all duration-300 bg-purple-800"
            >
              {darkMode ? (
                <Moon className="text-yellow-300 w-6 h-6" />
              ) : (
                <Sun className="text-yellow-400 w-6 h-6" />
              )}
            </button>
        </div>
    </div>
</nav>
  );
}
