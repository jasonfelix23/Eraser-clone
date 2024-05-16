"use client";
import { useUser } from '@clerk/nextjs';
import { useConvex } from 'convex/react';
import React, { useEffect } from 'react'
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import SideNav from './_components/SideNav';
type apiResponse = {
  status : number,
  data : any
}

function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
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
      <div className='grid grid-cols-4'>
        <div>
            <SideNav user={user}/> 
        </div>
        <div className='grid-cols-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout