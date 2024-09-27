const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})


const Posts = mongoose.model('PostsDB',PostSchema)

module.exports = Posts