const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const PostBlogs = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const posts = mongoose.model('post', PostBlogs);

module.exports = posts;
