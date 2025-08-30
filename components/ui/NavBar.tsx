"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

export default function NavBar() {
  return (
   <nav
    className="sticky top-0 w-full border-t-4 border-transparent
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
            <Link href="/articles" className="font-bold gradient-underline">
              Articles
            </Link>
            <Link href="/projects" className="font-bold gradient-underline">
              Projects
            </Link>
            <Link href="/contact" className="font-bold gradient-underline">
              Contact
            </Link>
              <ThemeSwitch />
        </div>
    </div>
</nav>
  );
}
