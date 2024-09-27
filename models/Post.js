const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : String,
    body:String,
},{timestamps:true})


const Posts = mongoose.model('PostsDB',PostSchema)

module.exports = Posts