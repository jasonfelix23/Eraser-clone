import React, {useEffect, useState} from 'react';
import SideNavTop from './SideNavTop';
import SideNavBottom from './SideNavBottom';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { TEAM } from '@/app/models/Team';
import { toast } from 'sonner';

const SideNav = ({user}: any) => {
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [totalFiles, setTotalFiles] = useState<number>();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();

  useEffect(() => {
    activeTeam && getAllFiles();
  }, [activeTeam])

  const onFileCreate =(fileName:string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.primaryEmailAddress.emailAddress,
      archive: false,
      document: '',
      whiteboard: '',
    }).then(resp => {
      toast('File created successfully');
      getAllFiles();
    }, (e) => {
      toast('Error while creating the file');

    })
  }

  const getAllFiles = async() => {
    const result = await convex.query(api.files.getAllFiles, {teamId: activeTeam?._id});
    setTotalFiles(result.data.length);
    console.log(result);
  }
  return (
    <div className='h-screen fixed w-48 md:w-72 dark:border-zinc-800 border-r p-6 flex flex-col'>
        <div className='flex-1'>
          <SideNavTop user={user} setActiveTeamInfo={(a: any) => setActiveTeam(a)}/>
        </div>
        <div>
          <SideNavBottom 
          onFileCreate={onFileCreate} totalFiles={5}/>
        </div>
    </div>
  )
}

export default SideNav