import React from "react";

const Navigation: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex max-md:flex-col max-md:gap-6 whitespace-nowrap items-center justify-around p-6 mx-auto max-w-screen-xl text-gray-600 capitalize dark:text-gray-300">
        {children}
      </div>
    </nav>
  );
};

export default Navigation;
