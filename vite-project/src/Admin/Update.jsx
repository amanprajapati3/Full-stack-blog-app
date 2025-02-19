import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [BlogImagePreview, SetBlogImagePreview] = useState();

  const blogs = {
    category: "",
    title: "",
    blog_img: "",
    about: "",
  };

  const navigate = useNavigate();

  const { id } = useParams();
  const [blog, setBlog] = useState(blogs);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
    console.log(blog);
  };

  const ChangePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        SetBlogImagePreview(reader.result);
        setBlog({ ...blog, blog_img: file }); // Update blog_img in state
      };
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3600/api/blog//getOne/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const HandleSubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3600/api/blog/Updata_blogData/${id}`, blog)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-sans p-10">Update Blog</h1>
        <div className="flex justify-center">
        <form
          action={"/CreateBlog"}
          className="ml-5 lg:text-xl "
          onSubmit={HandleSubmitForm}
        >
          <h1 className="pt-5">Category</h1>
          <select
            name="category"
            onChange={inputHandler}
            className="rounded-md border-2 border-gray-400 outline-none w-[100%] py-1 pl-2 my-3 focus:bg-gray-300"
            value={blog.category} // Controlled input
          >
            <option value="">Select Category</option>
            <option value="game">Game</option>
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
            value={blog.title} // Controlled input
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
            value={blog.about} // Controlled input
            onChange={inputHandler}
          />

          <button
            type="submit"
            className="rounded-md hover:bg-blue-500 hover:cursor-pointer bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4 w-[100%] py-1"
          >
            Update
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Update;
