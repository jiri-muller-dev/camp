import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camp",
  description: "Youth camp registration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="text-center">
          <h1 className="text-shadow-sm text-4xl mt-6">Camp THRIVE</h1>
          <Navigation>
            <Link href="/#aim" className="navbutton">
              About camp
            </Link>
            <Link href="/#upcoming" className="navbutton">
              Next camp
            </Link>
            <Link href="/registration" className="navbutton">
              Register
            </Link>
            <Link href="/list" className="navbutton">
              List of registrations
            </Link>
          </Navigation>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
