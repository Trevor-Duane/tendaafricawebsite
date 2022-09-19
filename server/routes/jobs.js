import express from "express";

import { 
    getAllJobs,
    getAllJobIds,
    createJob,
    getJobById,
    updateJob,
    deleteJob,
   
} from "../controllers/Jobs.js";
 
const router = express.Router();
 
router.get('/jobs', getAllJobs);
router.get('/jids', getAllJobIds);
router.get('/job/:id', getJobById);
router.post('/job', createJob);
router.patch('/job/:id', updateJob);
router.delete('/job/:id', deleteJob);

export default router;