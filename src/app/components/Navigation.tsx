'use client'
import Link from 'next/link'
import React from 'react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <nav className="sticky top-0 z-10 bg-white shadow dark:bg-gray-800">
      <button
        className="mx-auto block h-12 w-12 cursor-pointer p-1.5 transition duration-300 hover:opacity-70 md:hidden"
        onClick={toggleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>
      <div
        className={`${isOpen ? 'block' : 'hidden'} container mx-auto flex max-w-screen-xl items-center justify-around p-6 whitespace-nowrap text-gray-600 capitalize transition duration-100 ease-out max-md:flex-col max-md:gap-6 md:block dark:text-gray-300`}
      >
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
  )
}

export default Navigation
