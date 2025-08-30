import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blessing Emejulu",
  description: "A blog where I share my journey as Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body
        className="h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}