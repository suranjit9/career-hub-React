const getJobAplicetion =() =>{
    const jobAplicetion = localStorage.getItem('aplicetion');
    if(jobAplicetion){
        return JSON.parse(jobAplicetion);
    }
    return [];
}

const saveJob = id =>{
    const jobApply = getJobAplicetion();
    const exzit = jobApply.find(job => job === id);
    if(!exzit){
        jobApply.push(id);
        localStorage.setItem('aplicetion',JSON.stringify(jobApply));
    }
}

export{getJobAplicetion, saveJob}