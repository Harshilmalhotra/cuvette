"use client";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { FaPowerOff } from "react-icons/fa";

export default function Userinfo() {
    const { data: session } = useSession();
    const router = useRouter();
    // Corrected function call in onClick
    async function handleSignOut() {
        
        await signOut({ redirect: false }); // Wait for sign out to complete without redirecting
        router.push('/login'); // Then manually redirect to the login page
    }

    return (
        <div className="grid align-items-center">
            
                
                <div className='flex items-center gap-1'>
                    <button onClick={handleSignOut} className="text-red-500 text-xl">
                <FaPowerOff />
                </button>

                     Hi  <span> {session?.user?.name}</span> !
                    </div>
                
                    {/* Email: <span>{session?.user?.email}</span> */}
                
                    {/* <br/>Role: <span>{session?.user?.role} </span>  */}
                

                
            
        </div>
    );
}


