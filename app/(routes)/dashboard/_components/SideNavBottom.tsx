import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FiArchive, FiFile, FiFlag, FiFolder, FiGithub, FiPhone, FiShield, FiShieldOff, FiUser, FiUsers } from 'react-icons/fi';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';


const SideNavBottom = ({onFileCreate, totalFiles}:any) => {
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

  const free_tier = [
    {
      id: 1,
      desc: "upto 5 files",
      icon: FiFile,
    },
    {
      id: 2,
      desc: "single user",
      icon: FiUser,
    },
    {
      id: 3,
      desc: '7 days file life.',
      icon: FiShieldOff
    }
  ]

  const premium_tier = [
    {
      id: 1,
      desc: "unlimited files",
      icon: FiFolder
    },
    {
      id: 2,
      desc: 'Collaborate and share.',
      icon: FiUsers
    },
    {
      id: 3,
      desc: 'Saved to cloud.',
      icon: FiShield,
    },
    {
      id: 4,
      desc: 'Customer service',
      icon: FiPhone
    }

  ]

  const [fileInput, setFileInput] = useState<String>();

  return (
    <div>
      {menuList.map((menu, index) => (
        <h2 className='flex gap-2 p-1 px-2 text-[12px] hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer'>
          <menu.icon  className='h-4 w-4'/>
          {menu.name}
        </h2>
      ))}
      <Dialog>
        <DialogTrigger className='w-full' asChild>
          <Button className='w-full bg-blue-600 hover:bg-blue-700 justify-start mt-3 text-white'>New File</Button>
        </DialogTrigger>
        {totalFiles != 5 && <DialogContent className='bg-white text-black'>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input placeholder='Enter File Name: ' className='mt-3'
                onChange={(e) => setFileInput(e.target.value)}
              />
              {fileInput && fileInput.length > 0 && fileInput.length <= 3 &&
              <p className='text-[12px] text-gray-500'>
                Filename should consist of <strong>4</strong> characters
              </p>}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className='bg-blue-600 text-white'
                disabled={!(fileInput&&fileInput.length>3)}
                onClick={()=> onFileCreate(fileInput)}
              >Create</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>}
        {totalFiles === 5 && <DialogContent className='bg-white text-black'>
          <DialogHeader>
            <DialogTitle>Upgrade your plan</DialogTitle>
            <DialogDescription>
              <div className='grid grid-cols-2 gap-2 mt-2'>
                <Card className='flex flex-col'>
                  <CardHeader className='flex-1'>
                    <CardTitle className='text-lg'>Free Tier</CardTitle>
                    <CardDescription>
                      {free_tier.map((item, index) => (
                        <h2 className='text-[12px] flex gap-2 mt-1' key={index}>
                          <item.icon  className='h-4 w-4'/>
                          {item.desc}
                          </h2>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-md font-bold'>Free</p>
                  </CardContent>
                  <CardFooter>
                    <Button className='w-full bg-green-600 text-white/75'>
                      Applied
                    </Button>
                  </CardFooter>
                </Card>
                <Card className='flex flex-col'>
                <CardHeader className='flex-1'>
                    <CardTitle className='text-lg'>Premium Tier</CardTitle>
                    <CardDescription>
                      {premium_tier.map((item, index) => (
                        <h2 className='text-[12px] flex gap-2 mt-1' key={index}>
                          <item.icon  className='h-4 w-4'/>
                          {item.desc}
                          </h2>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-md font-bold'>$4.99</p>
                  </CardContent>
                  <CardFooter>
                    <Button className='w-full bg-zinc-900 text-white/75'>
                      Upgrade
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent> } 
      </Dialog>

      <div className='h-3 w-full bg-gray-200 dark:bg-gray-200 rounded-full mt-3'>
        <div className={`h-3 ${totalFiles < 5? 'bg-blue-600': 'bg-red-600'} rounded-full`} style={{width: `${(totalFiles/5)*100}%`}}>
        </div>
      </div>
      <h2 className='text-[12px] mt-2'><strong>{totalFiles}</strong> out of <strong>5</strong> files used</h2>
      <h2 className='text-[12px] text-gray-500'>Upgrade your plan for unlimited access</h2>
    </div>
  )
}

export default SideNavBottom