import AdminSidebar from "@/components/AdminSidebar"
import AdminNavbar from "@/components/AdminNavbar"
import AdminList from "@/components/AdminList"
import { Admin } from "mongodb"
export default function Console(){
    return (
        <>
        <AdminNavbar/>
        <div className="flex">
        <AdminSidebar/>
        <div>
        <AdminList/>
        </div>
        </div>
        </>
    )
}