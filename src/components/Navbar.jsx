import Link from 'next/link';
import Userinfo from './Userinfo';
export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-4 py-1 bg-blue-500 text-white">
            <div>
                <h1 className='text-2xl'>Cuvette</h1>
            </div>
            <div className='flex gap-x-3'>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/console">Admin</Link>

            </div>
            <Userinfo />
        </div>
    );
}