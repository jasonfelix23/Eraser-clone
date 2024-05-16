"use client";
import React, { useEffect, useState } from 'react';
import { MdOutlineCreate } from "react-icons/md";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HeaderMinimal from '@/app/_components/HeaderMinimal';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Create = () => {
    const { user, isLoaded, isSignedIn }: any = useUser();
    const userEmailAddress = user?.primaryEmailAddress?.emailAddress;

    const router = useRouter();

    const [teamName, setTeamName] = useState("");
    const createTeam = useMutation(api.teams.createTeam)

    const createNewTeam = () => {
        createTeam({
            teamName: teamName,
            createdBy: userEmailAddress,
        }).then(resp => {
            console.log(resp);
            if(resp.status == 200){
                router.push('/dashboard');
                toast("New Team created successfully!")
            }else{
                toast("Something went wrong. Try again.")
            }
        })
    }

  return (
    <div className='bg-white dark:bg-zinc-900'>
        <HeaderMinimal />
        
        <div className='flex flex-col m-8 items-center gap-3'>
            <h2 className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-600 dark:via-cyan-300 dark:to-cyan-600 via-amber-300 to-cyan-600 bg-clip-text text-transparent'>What should we call your team?</h2>
            <h2 className='text-gray-400 dark:text-gray-600 font-semibold text-xl'>You can always change this later from settings.</h2>

            <div className='grid w-full max-w-xl items-center gap-1.5 mt-10'>
                <label className='text-gray-400 dark:text-gray-600 '>Team Name</label>
                <Input className='w-[100%]' placeholder='New Team' 
                    onChange={(e) => setTeamName(e.target.value)}/>
            </div>
                <Button className='p-4 md:p-6 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 dark:hover:bg-white/75 hover:bg-black/75'
                    onClick={createNewTeam}
                    disabled={teamName.length == 0}>
                    <MdOutlineCreate className='mr-2 h-4 w-4'/> Create team
                </Button>
        </div>
    </div>
  )
}

export default Create;