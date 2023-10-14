import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getJobAplicetion } from "../../../js/SaveJobApliction";

const AppliedJobs = () => {
    const [jobsShow, setJobShow] = useState([]);
    const [displayShow, setDisplay] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const getStor = getJobAplicetion();
        if (jobs) {
            const saveJobApliction = jobs.filter(job => getStor.includes(job.id));
            // 2nd way to filter/ mas job id 
            // const saveJobApliction =[];
            // for(const id of getStor){
            //     const getjob = jobs.find(job => job.id === id)
            //     if(getjob){
            //         saveJobApliction.push(getjob);
            //     }
            // }
            setJobShow(saveJobApliction);
        }

    }, [jobs])
    return (
        <div>
            {
                jobsShow.map(job => <div key={job.id} className="flex flex-col w-full border-opacity-50">
                    <div className="flex  bg-base-300 rounded-box gap-4 pl-8 p-4">
                        <div className="">
                            <img className="w-32 mx-0 " src={job.logo} alt="" />
                        </div>
                        <div >
                            <h1>{job.job_title}</h1>
                            <h3>{job.company_name}</h3>
                            <h2>{job.salary}</h2>
                        </div>

                        <div className="items-end">
                            <Link>
                                <button className="btn ">Show Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;