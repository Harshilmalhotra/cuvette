"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditJopicForm({ id, jtitle, jdescription }) {

    const [newTitle, setNewTitle] = useState(jtitle);
    const [newDescription, setNewDescription] = useState(jdescription);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/job/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({newTitle,newDescription })
            });

            if (!res.ok) {
                throw new Error("Failed to update job");

            }

            await router.refresh();
            await router.push("/console");

        } catch (error) {
            console.log("Error updating job", error);

        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" placeholder="Job Title" className="border border-slate-500 p-2 my-2" />
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" placeholder="Job Description" className="border border-slate-500 p-2 my-2" />
            <button className="bg-blue-500 text-white p-2 my-2 mx-3 rounded-xl w-fit">Update Topic</button>
        </form>
    )
}