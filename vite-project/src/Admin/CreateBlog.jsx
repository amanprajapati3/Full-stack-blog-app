import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [BlogImagePreview, SetBlogImagePreview] = useState();
  const navigate = useNavigate();

  const BlogForm = {
    category: "",
    title: "",
    blog_img: null, // Changed from "" to null
    about: "",
  };

  const [Blog, setBlog] = useState(BlogForm);

  // Handles input changes
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBlog({ ...Blog, [name]: value });
  };

  // Handles image selection and updates state
  const ChangePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        SetBlogImagePreview(reader.result);
        setBlog({ ...Blog, blog_img: file }); // Update blog_img in state
      };
    }
  };

  // Handles form submission
  const HandleSubmitForm = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!Blog.category || !Blog.title || !Blog.blog_img || !Blog.about) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append("category", Blog.category);
    formData.append("title", Blog.title);
    formData.append("blog_img", Blog.blog_img); // Correctly include image file
    formData.append("about", Blog.about);

    try {
      const response = await axios.post(
        "http://localhost:3600/api/blog/Create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(response.data.msg, { position: "top-right" });

      // Reset form after successful submission
      setBlog(BlogForm);
      SetBlogImagePreview(null);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error during submission:", error.response?.data || error);
      toast.error(error.response?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold font-sans p-5">Create Blog</h1>
      <div>
        <form
          action={"/CreateBlog"}
          className="ml-5  w-[100%]"
          onSubmit={HandleSubmitForm}
        >
          <h1 className="pt-5">Category</h1>
          <select
            name="category"
            onChange={inputHandler}
            className="rounded-md border-2 border-gray-400 outline-none w-[100%] py-1 pl-2 my-3 focus:bg-gray-300"
            value={Blog.category} // Controlled input
          >
            <option value="">Select Category</option>
            <option value="gaming">Game</option>
            <option value="study">Study</option>
            <option value="sports">Sports</option>
            <option value="coding">Coding</option>
          </select>

          <h1 className="pt-5">Title</h1>
          <input
            type="text"
            placeholder="Enter your blog title"
            name="title"
            onChange={inputHandler}
            value={Blog.title} // Controlled input
            required
            className="rounded-md outline-none border-2 border-gray-400 py-1 focus:bg-gray-300 pl-2 my-3 w-[100%]"
          />

          <h1 className="pt-5">Blog Image</h1>
          <div className="border-2 h-72 flex justify-center border-gray-400 rounded-md">
            <img
              className="p-4 w-96 rounded-xl"
              src={
                BlogImagePreview
                  ? BlogImagePreview
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUqy_SZxyRxG5X8EFwFZhxLseYirbZcDzWQ&s"
              }
              alt="Blog Preview"
            />
          </div>
          <input
            type="file"
            name="blog_img"
            accept="image/*" // Ensure only images can be selected
            onChange={ChangePhoto}
            className="rounded-md outline-none border-2 border-gray-400 py-1 focus:bg-gray-400 pl-2 my-3 w-[100%]"
          />

          <h1 className="pt-5">About</h1>
          <textarea
            className="rounded-md outline-none border-2 border-gray-400 py-1 focus:bg-gray-300 pl-2 my-3 w-[100%]"
            name="about"
            rows={5}
            placeholder="Write something about the blog"
            value={Blog.about} // Controlled input
            onChange={inputHandler}
          />

          <button
            type="submit"
            className="rounded-md hover:bg-blue-500 hover:cursor-pointer bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4 w-[100%] py-1"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
