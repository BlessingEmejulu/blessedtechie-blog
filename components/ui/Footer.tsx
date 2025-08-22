import Link from "next/link";
import { Linkedin, Github, Facebook, X } from "lucide-react";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 text-center bg-transparent text-[#8367C7] border-t border-[#8367C7] mt-10">
            <div className="flex flex-col items-center justify-center">
                {/* Copyright and Links */}
                <div className="flex items-center text-sm mb-4">
                    <p className="mr-2">Blessing Emejulu</p>
                    <span className="mr-2">&copy; {currentYear}</span>
                    <span className="mx-1">•</span>
                    <Link href="/uses" className="hover:text-[#5603AD]">
                        Uses
                    </Link>
                    <span className="mx-1">•</span>
                    <Link href="/privacy" className="hover:text-[#5603AD]">
                        Privacy
                    </Link>
                    <span className="mx-1">•</span>
                    <Link href="/sitemap" className="hover:text-[#5603AD]">
                        Sitemap
                    </Link>
                    <span className="mx-1">•</span>
                    <Link href="/rss" className="hover:text-[#5603AD]">
                        RSS
                    </Link>
                    <span className="mx-1">•</span>
                    <Link href="/patreon" className="hover:text-[#5603AD]">
                        Patreon
                    </Link>
                </div>

                <div className="flex justify-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/blessing-emejulu-63850a248/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6 hover:text-[#5603AD]" />
                    </a>
                    <a
                        href="https://github.com/BlessingEmejulu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6 hover:text-[#5603AD]" />
                    </a>
                    <a
                        href="https://www.facebook.com/blessing.emejulu.33"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-6 w-6 hover:text-[#5603AD]" />
                    </a>
                    <a
                        href="https://x.com/blessedtechie"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                    >
                        <X className="h-6 w-6 hover:text-[#5603AD]" />
                    </a>
                </div>
            </div>
        </footer>
    );
}