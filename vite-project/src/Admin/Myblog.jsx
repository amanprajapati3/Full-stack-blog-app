import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Myblog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3600/api/blog/GetAll"
        );
        console.log(response.data); // Log data to console
        setBlogs(response.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data: ", error); // Log error details
      }
    };
    fetchData();
  }, []);

  const DeleteUser = async (Blog_id) => {
    console.log("Blog Id deleted:", Blog_id);
    await axios
      .delete(`http://localhost:3600/api/blog/Delete_Blog/${Blog_id}`)
      .then((response) => {
        setBlogs((prevUser) =>
          prevUser.filter((blogs) => blogs._id !== Blog_id)
        );
        toast.success(response.data.msg, {position:"top-right"})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <h1 className="text-2xl font-bold font-sans p-5">My Blog</h1>
    <div className=" mb-16 flex justify-center w-[100%]">
        <div className=" gap-5">
          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 mt-6 gap-5">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="border-2 border-gray-300 rounded-2xl p-2"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <img src={blog.blog_img.url} alt="" className="w-[100%] h-60  transition-all duration-200 filter grayscale-100 hover:grayscale-0" />
                  <div className="flex justify-between mx-5 mt-3">
                  <button className="p-2 rounded-md bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-700 cursor-pointer text-white ">
                    <a href={`/update/${blog._id}`}>Update</a>  
                  </button>
                  <button  onClick={() => DeleteUser(blog._id)} className="p-2 rounded-md bg-red-600 cursor-pointer hover:bg-red-700 active:bg-red-700 text-white ">
                    Delete
                  </button>
                  </div>
                  <h1 className="text-xl font-sans font-bold text-center pt-4">
                    {blog.category}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Myblog;