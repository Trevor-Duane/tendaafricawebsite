import Post from "../models/postModel.js";
 
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const getAllIds = async (req, res) => {
    try {
        const ids = await Post.findAll({
            attributes:['id']
        });
        res.json(ids);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({post});
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPost = async (req, res) => {
    try {
        await Post.create(req.body);
        res.json({
            "message": "Post Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePost = async (req, res) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Post Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePost = async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Post Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}