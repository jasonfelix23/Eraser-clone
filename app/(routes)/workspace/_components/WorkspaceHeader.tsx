import Logo from '@/app/_components/Logo'
import { ModeToggle } from '@/app/_components/ToggleMode'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { FiLink, FiSave } from 'react-icons/fi'

const WorkspaceHeader = ({onSave} : any) => {
  return (
    <div className='p-3 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center'>
        <div className='flex gap-1 md:gap-2 items-center'>
            <Logo minimal={true} height={150} weight={150}/>
            <h2>File name</h2>
        </div>
        <div className="flex gap-2">
          <Button className='h-8 text-[12px] gap-2 bg-cyan-600 hover:bg-cyan-700 text-white'
            onClick={() =>onSave()}><span className='hidden lg:block'>Save</span><FiSave/></Button> 
          <Button className='h-8 text-[12px] gap-2 bg-zinc-600 hover:bg-zinc-700 text-white'><span className='hidden lg:block'>Share</span> <FiLink/></Button>
        </div>
        <div className='flex gap-2'>
            <ModeToggle />
            <UserButton />
            
        </div>
    </div>
  )
}

export default WorkspaceHeader