import { ModeToggle } from '@/app/_components/ToggleMode'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { FiSearch, FiSend } from 'react-icons/fi'

const Header = () => {

  return (
    <div className='hidden md:flex justify-end w-full items-center gap-2'>
        <ModeToggle />
        <div className='flex gap-2 items-center border rounded-md'>
            <FiSearch  className='h-4 w-4 m-2'/>
            <input type='text' placeholder='Search' className='h-8'/>
        </div>
        <UserButton />
        <Button className='bg-blue-600 hover:bg-blue-700 text-white h-8'>
            <FiSend className='h-4 w-4'/>
            Invite
        </Button>
    </div>
  )
}

export default Header