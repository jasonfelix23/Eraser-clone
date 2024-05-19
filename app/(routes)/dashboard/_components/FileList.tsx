import { FileListContext } from '@/app/_context/FilesListContext'
import React, { useContext, useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {FILE} from '@/app/models/File';
import moment from 'moment';
import { FiDelete, FiEdit, FiMoreHorizontal, FiShare } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const FileList = () => {
    const {fileList_, setFileList_} = useContext(FileListContext);
    const [fileList, setFileList] = useState<FILE[]>();
    const router = useRouter();
    useEffect(()=> {
        fileList_ && setFileList(fileList_);
        console.log(fileList_);
    }, [fileList_])
  return (
    <div className='mt-8'>
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-600  bg-white dark:bg-zinc-900 text-sm">
            <thead className='bg-black/25 dark:bg-white/25'>
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200 text-left">File Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200 text-left">Created At</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200 text-left">Edited</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200 text-left">Author</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200 text-left"></th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {fileList && fileList.map((file, index) => (
                    <tr className='cursor-pointer' onClick={() => router.push('/workspace/'+file._id)}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">{file.fileName}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">{moment(file._creationTime).format('YYYY-MM-DD')}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">{moment(file._creationTime).format('YYYY-MM-DD')}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">{file.createdBy}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">
                        <DropdownMenu>
                            <DropdownMenuTrigger><FiMoreHorizontal /></DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white dark:bg-zinc-800">
                                <DropdownMenuItem className='flex gap-2 text-[12px] hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-md ' onClick={() => router.push('/workspace/'+file._id)}><FiEdit />Edit</DropdownMenuItem>
                                <DropdownMenuItem className='flex gap-2 text-[12px] hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-md '><FiDelete />Delete</DropdownMenuItem>
                                <DropdownMenuItem className='flex gap-2 text-[12px] hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-md '><FiShare />Share</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                            
                        </td>
                    </tr>
                ))}
            
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default FileList