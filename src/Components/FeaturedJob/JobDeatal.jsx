import { useLoaderData, useParams } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar, AiFillMinusSquare } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJob } from "../../js/SaveJobApliction";
const JobDeatal = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idx = parseInt(id);
    const job = jobs.find(job => job.id === idx);
    const handleApply = () => {
        // local Strore save
        saveJob( idx);
        toast("You Have Apply Successfuly");
    }
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-4 px-4 border rounded-lg ">
                <p><span className="font-semibold ">Job Description: </span>{job.job_description}</p>
                <p><span className="font-semibold">Job Description: </span>{job.job_responsibility}</p>
                <p><span className="font-semibold">Educational Requirements: </span>{job.educational_requirements}</p>
                <p><span className="font-semibold">Experiences: </span>{job.experiences}</p>
            </div>
            <div className="col-span-1 border rounded-lg">
                <div className="bg-[#EFEDFA]">
                    <div className=" p-8  ">
                        <h1 className="text-xm font-extrabold pb-3 ">Job Details</h1>
                        <hr />
                        <div className="flex gap-2 mb-4 mt-4">
                            <span><AiOutlineDollar className="text-2xl"></AiOutlineDollar></span>
                            <p className="text-sm"> Salary :{job.salary} (Per Month)</p>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <span><AiFillMinusSquare className="text-2xl"></AiFillMinusSquare></span>
                            <p className="text-sm"> Job Title  :{job.job_title} </p>

                        </div>
                        <hr />
                        <h1 className="text-xm font-extrabold pb-3 mt-4 ">Contact Information</h1>
                    </div>
                </div>
                <div className="text-center m-4">
                    <button onClick={handleApply} className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-300 hover:text-black ">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDeatal;