const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },

}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema);
//to use blog habe exports
module.exports = Blog;