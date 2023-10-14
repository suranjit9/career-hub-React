import { useEffect, useState } from "react";
import Job from "./job";


const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [datalod, setDatalod] = useState(4);

    useEffect(() => {
        fetch('./../../../public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    // console.log(jobs);
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold mb-3">Featured Jobs<sup className="font-bold text-green-500 text-3xl">{jobs.length}</sup></h1>
                <p className="text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0,datalod).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
           <div className={datalod === jobs.length?'hidden':''}>
           <button onClick={()=>setDatalod(jobs.length)} className="btn mb-4 text-center ">See All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJob;