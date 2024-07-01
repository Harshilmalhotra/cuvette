"use client";
import { useSession } from "next-auth/react"
import Link from "next/link"
export default function Sidebar() {
    const { data: session } = useSession();
    if(session?.user?.role === 'admin') {
        var isVisible = true;
    } else {
        var isVisible = false;
    }
    return (
        <div className="bg-gray-800 h-screen w-fit">
           
            <div className="p-4 pt-6 pr-10 ">
            <Link className="text-white" href="/profile">Profile</Link>
            <br/>
            <Link className="text-white" href="/dashboard">Dashboard</Link>
            <br/>
        
            <Link href="/console" className={`${isVisible ? '' : 'hidden'} text-white`}>Admin</Link>
            
            </div>
        </div>
    )
}