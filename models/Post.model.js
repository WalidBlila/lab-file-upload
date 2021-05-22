const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  content: String,
  creatorId: { type : mongoose.Schema.Types.ObjectId, ref: 'User' },
  picPath: String,
  picName: String
},{timestamps: true})


module.exports=mongoose.model('Post',postSchema)