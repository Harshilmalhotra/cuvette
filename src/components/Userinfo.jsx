"use client";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
export default function Userinfo() {
    const { data: session } = useSession();
    const router = useRouter();
    // Corrected function call in onClick
    async function handleSignOut() {
        
        await signOut({ redirect: false }); // Wait for sign out to complete without redirecting
        router.push('/login'); // Then manually redirect to the login page
    }

    return (
        <div className="grid place-items-center h-screen">
            <div>
                <h1>User Info</h1>
                <div>
                    Name: <span>{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span>{session?.user?.email}</span>
                </div>
                <div>
                    Role: <span>{session?.user?.role}</span>
                </div>

                <button onClick={handleSignOut} className="border-red-500 border-2">
                    SignOut
                </button>
            </div>
        </div>
    );
}


