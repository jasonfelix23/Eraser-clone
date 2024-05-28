import React, {useContext, useEffect, useState} from 'react';
import SideNavTop from './SideNavTop';
import SideNavBottom from './SideNavBottom';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { TEAM } from '@/app/models/Team';
import { toast } from 'sonner';
import { FileListContext } from '@/app/_context/FilesListContext';

const SideNav = ({user}: any) => {
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [totalFiles, setTotalFiles] = useState<number>();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();

  const {fileList_, setFileList_} = useContext(FileListContext);
  useEffect(() => {
    activeTeam && getAllFiles();
  }, [activeTeam])

  const onFileCreate =(fileName:string) => {
    console.log(fileName);
    if(activeTeam){
      createFile({
        fileName: fileName,
        teamId: activeTeam._id,
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
    }else{
      toast("Something went wrong, Refresh !");
    }
  }

  const getAllFiles = async() => {
    if(activeTeam){
      const result = await convex.query(api.files.getAllFiles, {teamId: activeTeam._id});
      setTotalFiles(result.data.length);
      console.log(result);
      setFileList_(result.data);
    }else{
      toast('Something went wrong. Refresh!')
    }
  }
  return (
    <div className='h-screen fixed w-48 md:w-72 dark:border-zinc-800 border-r p-6 flex flex-col'>
        <div className='flex-1'>
          <SideNavTop user={user} setActiveTeamInfo={(a: any) => setActiveTeam(a)}/>
        </div>
        <div>
          <SideNavBottom 
          onFileCreate={onFileCreate} totalFiles={totalFiles}/>
        </div>
    </div>
  )
}

export default SideNav