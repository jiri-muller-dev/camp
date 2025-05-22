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
  const navButtonStyle =
    "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-shadow-sm">Camp THRIVE</h1>
          <Navigation>
            <Link href="/#aim" className={navButtonStyle}>
              About camp
            </Link>
            <Link href="/#upcoming" className={navButtonStyle}>
              Next camp
            </Link>
            <Link href="/list" className={navButtonStyle}>
              List of registrations
            </Link>
          </Navigation>
        </div>
        {children}
      </body>
    </html>
  );
}
