"use client";
import React,{useEffect, useState} from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '@/app/models/File';

const WorkSpace = ({params}:any) => {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE>();
  const convex = useConvex();

  useEffect(() => {
    params.fileId && getFileData();
  }, [params.fileId]);

  const getFileData = async() => {
    const result = await convex.query(api.files.getFileById, {_id:params.fileId});
    console.log("---------------");
    console.log(result.data);
    setFileData(result.data);
  }
  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)}/>
      {fileData && 
      (<div className='grid grid-cols-1 md:grid-cols-2'>
        {/**Document**/}
        <div className='h-screen'>
          <Editor onSaveTrigger={triggerSave} fileId= {params.fileId} fileData={fileData}/>
        </div>
        {/**Canvas**/}
        <div className='bg-blue-500 h-screen'>
          Canvas
        </div>
      </div>
      )}
    </div>
  )
}

export default WorkSpace