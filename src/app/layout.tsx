import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Link from "next/link";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker2",
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
      <body className="bg-[hsl(46,21%,83%)]">
        <div className="text-center">
          <img
            src="/logo-v1-camp-thrive.png"
            className="mx-auto my-4 max-h-40"
          />
        </div>
        <Navigation>
          <Link
            href="/#aim"
            className={`navbutton ${permanentMarker.variable}`}
          >
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
        <div>{children}</div>
      </body>
    </html>
  );
}
