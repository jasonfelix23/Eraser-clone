import { Button } from '@/components/ui/button';
import React from 'react';
import { FiArchive, FiFlag, FiGithub } from 'react-icons/fi';

const SideNavBottom = () => {
  const menuList = [
    {
      id: 1,
      name: 'Getting started',
      icon: FiFlag,
      path: ''
    }, 
    {
      id: 2,
      name: 'Github',
      icon: FiGithub,
      path: ''
    }, 
    {
      id: 3,
      name: 'Archive',
      icon: FiArchive,
      path: ''
    }
  ]
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2 className='flex gap-2 p-1 px-2 text-[12px] hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer'>
          <menu.icon  className='h-4 w-4'/>
          {menu.name}
        </h2>
      ))}
      <Button className='w-full bg-blue-600 hover:bg-blue-700 justify-start mt-3 text-white'>New File</Button>
      <div className='h-3 w-full bg-gray-200 dark:bg-gray-200 rounded-full mt-3'>
        <div className='h-3 w-[40%] bg-blue-600 rounded-full'>
        </div>
      </div>
      <h2 className='text-[12px] mt-2'><strong>2</strong> out of <strong>5</strong> files used</h2>
      <h2 className='text-[12px] text-gray-500'>Upgrade your plan for unlimited access</h2>
    </div>
  )
}

export default SideNavBottom