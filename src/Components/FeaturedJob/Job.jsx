import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;
    
    return (
        <div className="card-compact bg-base-100 drop-shadow-xl rounded-lg pl-5 pt-4 mb-4">

            <figure><img className="w-[120px] pl-4" src={logo} alt="logo" /></figure>

            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                
                    <div className="flex gap-2">
                        <button className="btn btn-sm border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn btn-sm border-[#7E90FE]">{job_type}</button>
                    </div>
                <div className="flex gap-4"> 
                    <div className="flex gap-2">
                        <span><SlLocationPin className="text-xl"></SlLocationPin></span>
                        <h3>{location}</h3>
                    </div>
                    <div className="flex gap-2">
                        <span><AiOutlineDollar className="text-xl"></AiOutlineDollar></span>
                        <h3>{salary}</h3>
                    </div>
                </div>

                <div className="card-actions ">
                    
                <Link to={`/job/${id}`}>
                    <button className="btn btn-sm bg-[#7E90FE] text-white mt-3">View Details</button>
                </Link>
                </div>
            </div>
            
        </div>
       
    );
};

Job.propTypes ={
    job:PropTypes.object.isRequired 
}

export default Job;