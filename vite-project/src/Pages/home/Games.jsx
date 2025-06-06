import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";

const Games = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/blog/GetAll"
        );
        console.log(response.data); // Log data to console
        setBlogs(response.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data: ", error); // Log error details
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const gaming_blog = blogs.filter((blog) => blog.category === "gaming");

  return (
    <>
      <h1 className="font-bold font-sans text-5xl text-center pb-5">
        Gaming
      </h1>
      <div className="mt-5 mb-16 mx-5 flex justify-center">
        <div className="flex flex-wrap gap-5">
          <div className="flex justify-center md:gap-10 gap-4 flex-wrap lg:mx-10 md:mx-5 sm:mx-2 mx-2 ">
            {loading ? (
              <Loader/>
            ) : (
              gaming_blog.slice(0, 4).map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="overflow-hidden w-[270px] cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <NavLink to={`/blog_details/${blog._id}`}>
                    <img
                      src={blog.blog_img.url}
                      alt=""
                      className="w-full h-60  transition-all duration-300 hover:scale-110"
                    />
                  </NavLink>
                  <h1 className="pl-1 pt-3 text-center text-xl font-bold ">
                    {blog.title}
                  </h1>
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
      <center>
        <NavLink to={"/gaming-blog"}>
          <button className="mb-10 cursor-pointer px-5 py-2 rounded-md opacity-95 hover:opacity-100 transition-all active:scale-95 duration-300 bg-fuchsia-600 hover:bg-fuchsia-800">
            Load More...
          </button>
        </NavLink>
      </center>
    </>
  );
};

export default Games;
