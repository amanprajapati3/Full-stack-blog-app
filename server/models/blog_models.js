import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  blog_img: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  about: {
    type: String,
    required: true,
  },
  CreatedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("Blog_data", blogSchema);
