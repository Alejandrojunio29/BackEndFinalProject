const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    postContent: {
      type: String,
      required: true
    }
  });

  const Post = mongoose.model('Posts', postSchema)

  module.exports = Post 