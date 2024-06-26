import EditJobForm from "/src/components/EditJobForm.jsx"
import AdminNavbar from "/src/components/AdminNavbar.jsx"
import { Admin } from "mongodb"


    const getJobById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/job/${id}`,{cache: "no-store",});
            if (!res.ok) {
                throw new Error("Failed to fetch job");
                
            } 
            return res.json();
        } catch (error) {
            console.log("Error fetching job", error);
        }
    };


export default async function EditTopic({params}) {
    
    const { id } = params;
    console.log("#########id#########")

    const {job} =await getJobById(id);
    const {jtitle, jdescription} = job;
    console.log(id);
    
    return (
        <>
           
            <AdminNavbar/>
            <EditJobForm id={id} jtitle={jtitle} jdescription={jdescription}/>
        </>
    )
}