"use client";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
export default function Userinfo() {

    const { data: session } = useSession();

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

                <button onClick={() => signOut()} className="border-red-500 border-2">
                    SignOut
                </button>
            </div>
        </div>
    );
}