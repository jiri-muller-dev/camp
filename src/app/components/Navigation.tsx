import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 z-10">
      <div className="container flex max-md:flex-col max-md:gap-6 whitespace-nowrap items-center justify-around p-6 mx-auto max-w-screen-xl text-gray-600 capitalize dark:text-gray-300">
        <Link href="/#aim" className="navbutton">
          About camp
        </Link>
        <Link href="/#upcoming" className="navbutton">
          Next session
        </Link>
        <Link href="/registration" className="navbutton">
          Register
        </Link>
        <Link href="/list" className="navbutton">
          List of registrations
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
