import Link from 'next/link';
import Userinfo from './Userinfo';

export default function AdminSidebar(){
    return (
        <div className=" justify-between items-center pt-5 bg-slate-900 text-white h-screen w-fit  ">
           
            
           
                <div className='gap-3 px-4'>
                <Link href="/dashboard">User Dashboard </Link>
                <br/>
                <Link href="/console">Admin Console </Link>
                <br/>
                <Link href={"/addJob"}>Add Job </Link>
                </div>
            
        </div>
    )
}