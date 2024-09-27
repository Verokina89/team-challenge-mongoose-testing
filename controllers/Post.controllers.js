const postModel = require('../models/Post')



const PostController = {
    post: async (req,res) => {
        
        try {
            const postFeatures = req.body
            const post = await postModel.create(postFeatures) 
            res.status(201).json(post)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem trying to create a post',error:error.message})
        }
    },
    //GET /: Endpoint para traer todas las publicaciones.
    getAll:async (req,res) => {
        try {
            const postList = await postModel.find()
            res.status(200).json(postList)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem fetching posts from server'})
        }
    },
    //GET /id/:_id: Endpoint para buscar publicación por id.
    getById:async (req,res) => {
        
        
        try {
            const postId = req.params._id
            const post = await postModel.findById(postId)
            res.status(200).json(post)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem fetching post by id from server'})
        }
    },
    //GET /title/:title: Endpoint para buscar una publicación por su titulo.
    getByTitle:async (req,res) => {
        
        try {
            const postTitle = req.params.title
            
            const post = await postModel.findOne({title:postTitle})
            res.status(200).json(post)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem fetching post by title from server'})
        }
    },
    //PUT /id/:_id: Endpoint para actualizar una publicación.
    updateById:async (req,res) => {
        
        try {
            const postId = req.params._id
            const postBody = req.body
            
            const post = await postModel.findByIdAndUpdate(postId,{...postBody},{new:true})
            res.status(200).json(post)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem updating post by id from server'})
        }
    },
    deleteById :async (req,res) => {
        
        try {
            const postId = req.params._id 
            const post = await postModel.findByIdAndDelete(postId)
            res.status(200).json(post)
        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem fetching post by title from server'})
        }
    },
    getPostsWithPagination : async (req,res) =>{
        try {
            
            const pagination = await postModel.find().skip(0).limit(10)
            res.status(200).json(pagination)

        } catch (error) {
            res
            .status(500)
            .json({message:'There was a problem fetching pagination by title from server'})
        }
    } 
}

module.exports = PostController