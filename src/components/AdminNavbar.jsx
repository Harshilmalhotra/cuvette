import Link from 'next/link';
import Userinfo from './Userinfo';
import { FcSettings } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
export default function AdminNavbar(){
    return (
        <div className="flex justify-between items-center px-4 py-1 bg-slate-600 text-white">
            <div className='flex gap-3 text-xl'>
                
                <Link href="/console" className='flex gap-2 items-center'><SlSettings />Admin Console</Link>
            </div>
            
            <div className='flex gap-x-3'>
                
                <Link href="/dashboard">User Dashboard |</Link>
                <Link href="/console">Admin Console |</Link>
                <Link href={"/addJob"}>Add Job </Link>

            </div>
            <Userinfo />
        </div>
    )
}