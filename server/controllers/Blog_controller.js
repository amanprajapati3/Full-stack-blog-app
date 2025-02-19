import Blog_data from "../models/blog_models.js";
import { v2 as cloudinary } from "cloudinary";

export const create = async (req, res) => {
  try {
    console.log("📂 Uploaded Files:", req.files);

    if (!req.files || !req.files.blog_img) {
      return res.status(400).json({ message: "Blog image not uploaded." });
    }

    const { blog_img } = req.files;
    const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    
    if (!allowedFormats.includes(blog_img.mimetype)) {
      return res.status(400).json({ message: "Invalid image format. Please upload PNG, JPG, or WEBP." });
    }

    const { title, category, about } = req.body;
    if (!title || !category || !about) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    console.log("🔍 Attempting to upload to Cloudinary...");
    let cloudinaryResponse;
    try {
      cloudinaryResponse = await cloudinary.uploader.upload(blog_img.tempFilePath.replace(/\\/g, "/"));
      console.log("✅ Cloudinary Upload Response:", cloudinaryResponse);
    } catch (uploadError) {
      console.error("❌ Cloudinary Upload Failed:", uploadError);
      return res.status(500).json({ message: "Image upload failed", error: uploadError.message });
    }

    if (!cloudinaryResponse || !cloudinaryResponse.public_id || !cloudinaryResponse.secure_url) {
      return res.status(500).json({ message: "Image upload failed, response missing required fields" });
    }

    const newBlog = {
      title,
      category,
      about,
      admin_name: req?.Users?.name || "Unknown",
      CreatedBy: req?.Users?._id || null,
      admin_photo: req?.Users?.photo || "",
      blog_img: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    };

    const blog = await Blog_data.create(newBlog);
    res.status(201).json({ message: "Blog posted successfully", blog });

  } catch (error) {
    console.error("❌ Error in createBlog:", error);
    return res.status(500).json({ message: "Server error", error: error.message || error });
  }
};

// Read
export const GetAll = async (req, res) => {
  try {
    const blog = await Blog_data.find();
    if (!blog) {
      return res.status(401).json({ msg: "User data not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const blogExist = await Blog_data.findById(id);
    if (!blogExist) {
      return res.status(401).json({ msg: "blog not exist." });
    }
    res.status(200).json(blogExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Update
export const Updata_blogData = async (req, res) => {
  try {
    const id = req.params.id;
    const blogExist = await Blog_data.findById(id);
    if (!blogExist) {
      return res.status(401).json({ msg: "blog not exist" });
    }
    const updateBlogData = await Blog_data.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "Blog Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


// Delete
export const Delete_Blog = async (req, res) => {
  try {
    const id = req.params.id;
    const blogExist = await Blog_data.findById(id);
    if (!blogExist) {
      return res.status(401).json({ msg: "Blog not found" });
    }
    await Blog_data.findByIdAndDelete(id);
    res.status(200).json({ msg: "Blog has been deleted." });
  } catch (error) {
    return res.status(500).json({message:"Internal server error."})
  }
};