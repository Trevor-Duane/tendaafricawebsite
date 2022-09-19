import express from "express";

// const router = express.Router();
 
// router.get('/', function(req,res){
//     res.redirect('/posts');
//     res.redirect('/users');
// });

// export default router;
import { getUsers, register, login } from "../controllers/Users.js";

// import {
//     getAllUsers,
//     createUser,
//     getUserById,
//     updateUser,
//     deleteUser,

// } from "../controllers/Users.js";
import { 
    getAllJobs,
    getAllJobIds,
    createJob,
    getJobById,
    updateJob,
    deleteJob,
   
} from "../controllers/Jobs.js";

import { 
    getAllPosts,
    getAllIds,
    createPost,
    getPostById,
    updatePost,
    deletePost,
   
} from "../controllers/Posts.js";
 
const router = express.Router();
 
router.get('/posts', getAllPosts);
router.get('/ids', getAllIds);
router.get('/post/:id', getPostById);
router.post('/post', createPost);
router.patch('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

// //user roots
// router.get('/users', getAllUsers);
// router.get('/user/:id', getUserById);
// router.post('/user', createUser);
// router.patch('/user/:id', updateUser);
// router.delete('/user/:id', deleteUser);

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login', login);

router.get('/jobs', getAllJobs);
router.get('/jids', getAllJobIds);
router.get('/job/:id', getJobById);
router.post('/job', createJob);
router.patch('/job/:id', updateJob);
router.delete('/job/:id', deleteJob);

export default router;