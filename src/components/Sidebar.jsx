import Link from "next/link"
export default function Sidebar() {
    return (
        <div className="bg-gray-800 h-screen w-fit">
           
            <div className="p-4 pt-6 pr-10 ">
            <Link className="text-white" href="/dashboard">Dashboard</Link>
            <br/>
        
            <Link className="text-white"  href="/console">Admin</Link>
            
            </div>
        </div>
    )
}