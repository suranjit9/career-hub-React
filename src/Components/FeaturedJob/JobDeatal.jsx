import { useLoaderData, useParams } from "react-router-dom";


const JobDeatal = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idx = parseInt(id);
    const job = jobs.find(job => job.id === idx);
    console.log(job,idx);
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-4 px-4 border border-red-700">
                <p><span className="font-semibold ">Job Description: </span>{job.job_description}</p>
                <p><span className="font-semibold">Job Description: </span>{job.job_description}</p>
            </div>
            <div className="col-span-1 border border-red-700"></div>
        </div>
    );
};

export default JobDeatal;