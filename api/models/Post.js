const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content : String,
    cover : String,
    source : String,
    category : String,
    time : String
}, {});

const PostModel = model('Post',PostSchema);

module.exports = PostModel;