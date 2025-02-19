import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const BlogDetails = () => {
  const [BlogImagePreview, SetBlogImagePreview] = useState();

  const blogs = {
    category: "",
    title: "",
    blog_img: "",
    about: "",
  };

  const { id } = useParams();
  const [blog, setBlog] = useState(blogs);
  const BlogImage = (e) => {
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
        console.log(response.data);
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <>
     <div className="m-5">
        <h1 className="text-5xl p-5">
          {blog.category}
        </h1>
        <p className="text-center text-xl font-bold font-sans py-2">{blog.title}</p>
        <div className="flex justify-center items-center flex-wrap text-center">
        <img
              className="p-4 w-[600px] rounded-xl"
              src={
                BlogImagePreview || blog.blog_img?.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUqy_SZxyRxG5X8EFwFZhxLseYirbZcDzWQ&s"
              }
              alt="Blog Preview"
            />
             <input
            type="file"
            name="blog_img"
            accept="image/*" // Ensure only images can be selected
            onChange={BlogImage}
            className="rounded-md outline-none border-2 border-gray-400 py-1 focus:bg-gray-400 pl-2 my-3 w-[100%] hidden"
          />
          <span>
          <label htmlFor="" className="text-2xl font-bold p-5 font-sans">About</label> <br />
          <p className="p-8 text-xl w-[500px]">{blog.about}</p>
          </span>
        </div>
     </div>
     <Footer/>
  </>;
};

export default BlogDetails;
