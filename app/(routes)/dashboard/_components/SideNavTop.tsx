import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6';
import { PiEraserFill } from 'react-icons/pi';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import path from 'path';
import { FiSettings, FiPlus, FiGrid } from 'react-icons/fi';
import { UserButton, useUser } from '@clerk/nextjs';
import { Separator } from '@/components/ui/separator';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { Butcherman } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { TEAM } from '@/app/models/Team';
import Logo from '@/app/_components/Logo';

type apiResponse = {
    status : number,
    data : any
  }
const SideNavTop = ({user, setActiveTeamInfo}: any) => {
    const menu = [
        {
            id: 1,
            name: 'Create Team',
            path: '/teams/create',
            icon: FiPlus
        },{
            id: 2,
            name: 'Settings',
            path: '',
            icon: FiSettings
        }
    ]
    const convex = useConvex();
    const router = useRouter();
    const userEmailAddress = user?.primaryEmailAddress.emailAddress;

    const [teamList, setTeamList] = useState<TEAM[]>();
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    useEffect(()=>{
        user && getTeamList();
    }, [user]);

    useEffect(()=>{
        activeTeam && setActiveTeamInfo(activeTeam);
    }, [activeTeam])

    const getTeamList=async()=>{
        const result : apiResponse = await convex.query(api.teams.getTeam, {email:userEmailAddress})
        console.log("Teamlist: ", result);
        if(result.status == 200){
            setTeamList(result.data);
            setActiveTeam(result.data[0]);
        }
    }
    const onMenuClick=(item:any) =>{
        console.log(item);
        if(item.path){
            router.push(item.path);
        }
    }
    
  return (
    <div>
        <Popover>
            <PopoverTrigger className='w-full'>
                <div className='flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-zinc-800 p-3 rounded-lg cursor-pointer w-full'>
                    <Logo minimal={true} height={80} width={80}/>
                    <h2 className='flex gap-2 items-center font-semibold text-[14px]'>
                        {activeTeam?.teamName}
                        <FaChevronDown />     
                    </h2>
                </div>
            </PopoverTrigger>
            <PopoverContent className='ml-7 p-4 bg-white dark:bg-zinc-800 dark:border-zinc-900'>
                <div>
                    {teamList?.map((team, index) => (
                    <h2 key={index}
                        className={`p-2 hover:bg-blue-600 hover:text-white rounded-lg mb-1 cursor-pointer text-[12px]
                            ${activeTeam?._id==team._id && 'bg-blue-600 text-white'}
                        `}
                        onClick={()=> setActiveTeam(team)}
                    >{team.teamName}</h2>
                    ))}
                </div>
                <Separator className='m-2 bg-gray-100 dark:bg-zinc-800'/>
                <div>
                    {menu.map((item, index)=>(
                        <h2 key={index} className='flex gap-2 items-center p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-[12px]'
                            onClick={()=> onMenuClick(item)}
                        >
                            <item.icon className='h-4 w-4'/>
                            {item.name}
                        </h2>
                    ))}
                </div>
                <Separator className='m-2 bg-gray-100 dark:bg-zinc-800'/>
                <div className='flex gap-2 items-center'>
                    <UserButton />
                    <div className='flex flex-col gap-1 '>
                        <h2 className='font-bold text-[12px]'>
                            {user?.fullName}    
                        </h2>
                        <h2 className='text-[10px] font-thin text-gray-500'>
                            {userEmailAddress}
                        </h2>
                    </div>
                </div>

            </PopoverContent>
        </Popover>
        <Button variant='outline' className='w-full justify-start gap-2 font-semibold mt-8 bg-gray-200 dark:bg-zinc-800 dark:border-zinc-800'><FiGrid className='h-5 w-5'/>All Files</Button>
    </div>
  )
}

export default SideNavTop