import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import JobList from "@/components/JobList";
import Userinfo from "@/components/Userinfo";
export default function Dashboard() {   
    return (
        <>
        <Navbar/>
        <div className="flex ">
            <Sidebar/>
            
            <div className="w-screen">
        <JobList/>
        </div>
        </div>
        
        </>
    );
}