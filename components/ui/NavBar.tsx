"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed z-50 top-0 w-full border-t-4 bg-[var(--background)] backdrop-blur-lg
                 bg-[length:100%_4px] bg-top bg-no-repeat
                 flex items-center justify-between px-4 py-3 shadow-md shadow-purple-500/20"
    >
      <div className="flex w-full items-center justify-between mx-auto max-w-7xl">
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
            <p className="font-bold gradient-text">
              BlessedTechie
            </p>
          </Link>
        </div>

        {/* Desktop Links + Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/articles" className="font-bold gradient-underline">
            Articles
          </Link>
          <Link href="/contact" className="font-bold gradient-underline">
            Contact
          </Link>
          <ThemeSwitch />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--background)] backdrop-blur-lg shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/articles"
              className="font-bold gradient-underline w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="font-bold gradient-underline w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <ThemeSwitch />

            <div className="w-full flex justify-center">
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
