import AdminNavbar from "@/components/AdminNavbar"
export default function AddJob() {
   return(
    <>
    <AdminNavbar/>
    <form className="flex flex-col">
        <input type="text" placeholder="Job Title" className="border border-slate-500 p-2 my-2"/>
        <input type="text" placeholder="Job Description" className="border border-slate-500 p-2 my-2"/>
    <button className="bg-blue-500 text-white p-2 my-2 mx-3 rounded-xl w-fit">Add Job</button>
    </form>

    </>
   ) }
