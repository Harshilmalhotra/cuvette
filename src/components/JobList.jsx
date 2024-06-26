const getJobs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/job",{cache: "no-store",});
        if (!res.ok) {
            throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        // console.log("res", data);
        return data;  // Assuming data is an object with a jobs property
    } catch (error) {
        console.log("Error loading jobs: ", error);
        return { jobs: [] };  // Return a default structure
    }
};

export default async function AdminList() {
    const data = await getJobs();
    const { jobs = [] } = data;  // Destructure and default to an empty array

    // console.log("jobs", data);
    return (
        <>
        
            {data.length > 0 ? data.map((job) => (
                <div
                    key={job._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{job.jtitle}</h2>
                        <div>{job.jdescription}</div>
                        {job._id}
                    </div>

                   
                </div>
            )) : (
                <p>No jobs available.</p>
            )}
        </>
    );
}
