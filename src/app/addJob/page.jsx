"use client"
import { useState } from "react"

import AdminNavbar from "@/components/AdminNavbar"
import { useRouter } from "next/navigation"

export default function AddJob() {
    const [jtitle, setJtitle] = useState("");
    const [jdescription, setJdescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("---------------------------------------------------------------")
        console.log("submitting job");
        console.log(jtitle, jdescription);
        console.log("---------------------------------------------------------------")
        if (!jtitle || !jdescription) {
            alert("Job Title and Job Description are required");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/job", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({jtitle, jdescription})
            });

            if (res.ok) {
                alert("Job Added Successfully");
                router.refresh();
                router.push("/console");
            } else {
                throw new Error("Failed to add job");
            }
        } catch (error) {
            console.log("Error adding job", error);
        }
    };

    return (
        <>
            <AdminNavbar />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input 
                    onChange={(e) => setJtitle(e.target.value)}
                    value={jtitle}
                    type="text" placeholder="Job Title" className="border border-slate-500 p-2 my-2" />
                <input 
                    onChange={(e) => setJdescription(e.target.value)}
                    value={jdescription}
                    type="text" placeholder="Job Description" className="border border-slate-500 p-2 my-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 my-2 mx-3 rounded-xl w-fit">Add Job</button>
            </form>
        </>
    )
}