"use client";
import AppliedJobs from './AppliedJobs';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Corrected import from 'next/navigation' to 'next/router'



export default function UserProfile() {
    const { data: session } = useSession();
    const router = useRouter();
 

    return (
        <>
        <div className="flex w-full h-full mx-auto flex-col gap-3 ">
            <div className="text-xl p-4 border border-slate-400 shadow-xl rounded-xl ml-6">
                Profile Details:
                <div className='flex items-center gap-10'>
                    <h1> Name: {session?.user?.name}</h1>
                    <h1> Email: {session?.user?.email}</h1>
                    <h1> ID: {session?.user?.id}</h1>
                </div>
            </div>
            <div className="text-xl p-4 border border-slate-400 shadow-xl rounded-xl ml-6">
                Applied Jobs:
                <AppliedJobs id={session?.user?.id}/>
                
            </div>
        </div></>
    );
    
}