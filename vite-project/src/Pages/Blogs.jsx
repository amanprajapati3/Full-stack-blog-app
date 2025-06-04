import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {

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

  return (
    <>
    <div className='mt-10 mx-5 mb-20'>
    <h1 className='text-2xl font-bold'>All Blogs</h1>
    <p className=' text-sm py-2'>Writing is not merely an act of putting words on paper, its a journey of exploration and expression.</p>
    <div className=" mb-16 flex justify-center">
        <div className="flex flex-wrap gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  md:grid-cols-3 lg:grid-cols-4 lg:mx-20 md:mx-5 sm:mx-2 mx-2 mt-6">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="border-2 overflow-hidden border-gray-300 rounded-2xl hover:cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <a href={`/blog_details/${blog._id}`}>
                  <img src={blog.blog_img.url} alt="" className="w-full h-60 transition-all duration-300 hover:scale-110" />
                  </a>
                  <h1 className="text-2xl relative -mt-10 mb-5 ml-5 text-purple-300 font-sans font-bold ">
                    {blog.category}
                  </h1>
                  <p className=" relative  mb-5 ml-5  font-sans  ">
                    {blog.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs;