"use client";
import React, { useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import Header from './_components/Header';
import FileList from './_components/FileList';

type apiResponse = {
  status : number,
  data : any
}

const Dashboard = () => {
  const { user, isLoaded, isSignedIn }: any = useUser();
  const userEmailAddress = user?.primaryEmailAddress?.emailAddress;
  
  const addUser = useMutation(api.user.addUser);
  const userFromDb: apiResponse | undefined = useQuery(api.user.getUser, { email: userEmailAddress });
  
  useEffect(() => {
    if (isLoaded && isSignedIn && userEmailAddress && userFromDb?.status == 400) {
        addUser({
          email: userEmailAddress,
          name: user?.firstName,
          profilePic: user?.imageUrl
        }).then((response) => {
          console.log(response);
        });
      }
    }, [userEmailAddress, userFromDb?.status]);

  return (
    <div className='p-8'>
      <Header />
      <FileList />
    </div>
  )
}

export default Dashboard