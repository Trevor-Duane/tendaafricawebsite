import Job from "../models/jobModel.js";
 
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const getAllJobIds = async (req, res) => {
    try {
        const ids = await Job.findAll({
            attributes:['id']
        });
        res.json(ids);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getJobById = async (req, res) => {
    try {
        const job = await Job.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({job});
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createJob = async (req, res) => {
    try {
        await Job.create(req.body);
        res.json({
            "message": "Job Ad Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateJob = async (req, res) => {
    try {
        await Job.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Job Add Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteJob = async (req, res) => {
    try {
        await Job.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Job Ad Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}