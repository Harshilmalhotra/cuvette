import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getJobs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/job", {
            cache: "no-store",
            
        });
        console.log("res",res);

        if (!res.ok) {
            throw new Error("Failed to fetch jobs");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading jobs: ", error);
    }
};

export default async function AdminList() {
    const { jobs } = await getJobs();
    console.log("jobs",jobs);
    return (
        <>
            {/* {jobs.map((t) => ( */}
                <div
                    // key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">j</h2>
                        <div>j</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={"id"} />
                        <Link href={`/editTopic/${"id"}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            {/* ))} */}
        </>
    );
}