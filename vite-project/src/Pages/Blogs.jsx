import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useAsyncError } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/blog/GetAll"
        );
        console.log(response.data); // Log data to console
        setBlogs(response.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data: ", error); // Log error details
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" mb-20">
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/blog2.jpg"
              alt="Background"
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
          <div className="relative  text-center  items-center pb-28 pt-16 md:pb-32 md:pt-44">
            <h1 className="text-white text-4xl md:text-6xl font-mono">
              Write real. Stay relatable..
            </h1>
            <p className="text-white pt-5">
              Blogging is just writing — writing using a particularly efficient
              type of publishing technology.
            </p>
            <button className="my-5 py-3 px-7 cursor-pointer text-white bg-gradient-to-r via-pink-800 to-purple-800 rounded-md hover:via-purple-800 hover:to-pink-800 transition-all duration-500 hover:rounded-3xl">
              Learn More
            </button>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl pt-10 text-center font-bold">
          All Blogs
        </h1>
        <div className=" mb-16 flex justify-center">
          <div className="flex justify-center flex-wrap gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:mx-20 md:mx-5 sm:mx-2 mx-2 mt-6">
              {loading ? (
                <Loader />
              ) : (
                blogs.map((blog) => {
                  return (
                    <div
                      key={blog._id}
                      className=" overflow-hidden  hover:cursor-pointer"
                    >
                      {" "}
                      {/* Use a unique identifier like _id */}{" "}
                      <NavLink to={`/blog_details/${blog._id}`}>
                        <img
                          src={blog.blog_img.url}
                          alt=""
                          className="w-full h-60 transition-all duration-300 hover:scale-110"
                        />
                      </NavLink>
                      <h1 className="text-2xl text-center w-full bg-black/50 backdrop-blur-md relative -mt-8 mb-5 py-2 text-white font-sans font-bold ">
                        {blog.category}
                      </h1>
                      <p className=" relative font-bold text-center text-xl mb-5 ml-5  font-sans  ">
                        {blog.title}
                      </p>
                      <p className=" pr-1 text-center overflow-hidden h-[70px] pl-1">
                        {blog.about}
                      </p>
                      <center>
                        <NavLink to={`/blog_details/${blog._id}`}>
                          <button className="my-3 text-blue-600 cursor-pointer border-b-2 border-b-blue-800">
                            Read More
                          </button>
                        </NavLink>
                      </center>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
