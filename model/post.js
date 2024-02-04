import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const post = mongoose.model("post", postSchema);
export default post;
