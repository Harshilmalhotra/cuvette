"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const getJobs = async () => {
    
    try {
        const res = await fetch("http://localhost:3000/api/job", { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        return data; // Assuming data is an object with a jobs property
    } catch (error) {
        console.log("Error loading jobs: ", error);
        return { jobs: [] }; // Return a default structure
    }
};

const applyToJob = async (jtitle, jdescription, userId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/applyJob/${userId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jtitle, jdescription }),
        });
        console.log(JSON.stringify({ jtitle, jdescription }));
        console.log("uid",session?.user?.name);
        if (!response.ok) {
            throw new Error("Failed to apply to job");
        }

        const result = await response.json();
        alert(`Applied successfully to ${jtitle}`);
    } catch (error) {
        console.error("Error applying to job: ", error);
        alert("Job applied");
    }
};

function JobList() {
    const { data: session } = useSession();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const data = await getJobs();
            setJobs(data || []);
        };
        
        fetchJobs();
    }, []);

    return (
        <>
            {jobs.length > 0 ? jobs.map((job) => (
                <div
                    key={job._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{job.jtitle}</h2>
                        <div>{job.jdescription}</div>
                        {job._id}
                    </div>
                    <button
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => applyToJob(job.jtitle, job.jdescription, session?.user?._id)}
                    >
                        Apply
                    </button>
                </div>
            )) : (
                <p>No jobs available.</p>
            )}
        </>
    );
}

export default JobList;