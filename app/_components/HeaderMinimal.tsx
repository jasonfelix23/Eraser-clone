import React from 'react';
import { PiEraserFill } from 'react-icons/pi';
import { ModeToggle } from './ToggleMode';
import Logo from './Logo';

const HeaderMinimal = () => {
  return (
  <header className="bg-white dark:bg-zinc-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo minimal={false} height={200} width={200}/>
  
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
    <span className='flex items-center'>
        <span className='p-6'></span>
        <span className='h-px flex-1 bg-gray-200 dark:bg-zinc-800'></span>
        <span className='p-6'></span>
    </span>
  </header>
  )
}

export default HeaderMinimal