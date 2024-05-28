"use client";
import { useUser } from '@clerk/nextjs';
import { useConvex } from 'convex/react';
import React, { useEffect, useState } from 'react'
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import SideNav from './_components/SideNav';
import { FileListContext } from '@/app/_context/FilesListContext';
type apiResponse = {
  status : number,
  data : any
}

function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [fileList_, setFileList_] = useState();
    const convex = useConvex();
    const {user}: any = useUser();
    const userEmailAddress = user?.primaryEmailAddress?.emailAddress;
    const username = user?.firstName;
    const router = useRouter();
  useEffect(() => {
    user && checkTeam();
  }, [user])

  const checkTeam = async() => {
    console.log("Inside Check team")
    const result : apiResponse = await convex.query(api.teams.getTeam, {email:userEmailAddress})
    console.log(result);
    if(result.status != 200){
        router.push('teams/create');
    }
  }

  return (
    <div className=''>
      <FileListContext.Provider value={{fileList_, setFileList_}}>

      <div className='grid grid-cols-4'>
        <div className='h-screen w-48 md:w-72 fixed'>
            <SideNav user={user}/> 
        </div>
        <div className='col-span-4 ml-48 md:ml-72'>
          {children}
        </div>
      </div>
      </FileListContext.Provider>
    </div>
  )
}

export default DashboardLayout