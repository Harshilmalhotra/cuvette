import { useEffect, useState } from 'react';

export default function AppliedJobs({ id }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const getAppliedJob = async () => {
            setIsLoading(true); // Start loading
            try {
                const res = await fetch(`http://localhost:3000/api/getJob/${id}`, { cache: "no-store" });

                if (!res.ok) {
                    throw new Error("Failed to fetch job");
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching job", error);
                setData([]); // Set data to an empty array in case of error
            } finally {
                setIsLoading(false); // End loading
            }
        };

        getAppliedJob();
    }, [id]); // useEffect will rerun on id chanz

    if (isLoading) {
        return <p>Loading...</p>; // Display loading message
    }
    console.log(data);
    // console.log("dl",data.user.length);

    return (
        <>
            
            {data.user && data.user.japply && data.user.japply.length > 0 ? (
                data.user.japply.map((job) => (
                    <div key={job._id}>
                        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                        <div>Job Title: {job.title}</div>
                        <div>Job Description: {job.description}</div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No jobs found.</p>
            )}
        </>
    );
}