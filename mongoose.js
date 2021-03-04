const mongoose = require('mongoose');
mongoose.connect("http://127.0.0.1:27017/crud");

var Schema = mongoose.Schema;
var commentSchema = new Schema({
    author:String,
    text:String
})
var Comment = mongoose.model("Comment", commentSchema);