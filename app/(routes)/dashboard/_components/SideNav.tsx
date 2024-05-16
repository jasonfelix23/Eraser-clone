import React from 'react';
import SideNavTop from './SideNavTop';
import SideNavBottom from './SideNavBottom';

const SideNav = ({user}: any) => {

  return (
    <div className='h-screen fixed w-48 md:w-72 dark:border-zinc-800 border-r p-6 flex flex-col'>
        <div className='flex-1'>
          <SideNavTop user={user}/>
        </div>
        <div>
          <SideNavBottom />
        </div>
    </div>
  )
}

export default SideNav