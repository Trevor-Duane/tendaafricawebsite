import express from "express";

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
router.patch('/post:id', updatePost);
router.delete('/post:id', deletePost);

export default router;