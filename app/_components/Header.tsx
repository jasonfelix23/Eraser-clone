import React from 'react'
import { ModeToggle } from './ToggleMode'
import Image from 'next/image'
import { PiEraserFill } from 'react-icons/pi'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from 'next-themes'
import Logo from './Logo'


const Header = () => {
    const headerOptions = ['about', 'plans', 'history', 'services', 'blog'];
  return (
    <header className="bg-white dark:bg-zinc-900">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Logo minimal={false}/>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {headerOptions.map((item) => (
                <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href={item}
                >
                  {`${item.charAt(0).toUpperCase() + item.slice(1)}`}
                </a>
              </li>
            ))}
            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-cyan-500"
            href="/sign-in"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-cyan-600 dark:bg-zinc-800 dark:text-white dark:hover:text-white/75"
              href="/sign-up"
            >
              Register
            </a>
          </div>
        </div>
          <div className=''>
            <ModeToggle />
          </div>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Visit on a <span className='text-cyan-600'>Larger device</span> for better experience</SheetTitle>
                <SheetDescription>
                <ul className="flex flex-col items-center gap-6 text-md pt-10">
            {headerOptions.map((item) => (
                <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href={item}
                >
                  {`${item.charAt(0).toUpperCase() + item.slice(1)}`}
                </a>
              </li>
            ))}
            
          </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </div>
</header>
    
  )
}

export default Header