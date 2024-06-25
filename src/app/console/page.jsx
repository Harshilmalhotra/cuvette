
import AdminNavbar from "@/components/AdminNavbar"
import AdminList from "@/components/AdminList"
import { Admin } from "mongodb"
export default function Console(){
    return (
        <>
        <AdminNavbar/>
        <AdminList/>
        <AdminList/>
        <AdminList/>
        <AdminList/>
       
        </>
    )
}