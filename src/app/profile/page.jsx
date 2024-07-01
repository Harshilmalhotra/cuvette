
import User from '@/models/user';
import UserProfile from '@/components/UserProfile.jsx';
import Navbar from '@/components/Navbar.jsx';
import Sidebar from '@/components/Sidebar.jsx';
export default function Profile() {
    return (


        <>
            <Navbar />
            <div className="flex ">
                <Sidebar />

                <div className="w-fit">
                    <UserProfile />
                </div>
            </div>



        </>

    )
}