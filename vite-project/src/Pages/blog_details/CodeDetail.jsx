import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const CodeDetail = () => {
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

  const Coding_blog = blogs.filter((blog) => blog.category === "coding");

  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/coding.jpg"
              alt="Background"
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
          <div className="relative  text-center  items-center pb-28 pt-16 md:pb-32 md:pt-44">
            <h1 className="text-white text-4xl md:text-6xl font-mono">
              Code is Poetry
            </h1>
            <p className="text-white pt-5">
              Writing code is not just logic; its an art form expressed through
              syntax. <br /> Great code has rhythm, elegance, and flow—just like
              a poem. Its not only about solving problems but doing it
              beautifully.
            </p>
            <button className="my-5 py-3 px-7 cursor-pointer text-white bg-gradient-to-r via-pink-800 to-purple-800 rounded-md hover:via-purple-800 hover:to-pink-800 transition-all duration-500 hover:rounded-3xl">
              Learn More
            </button>
          </div>
        </div>
        <h1 className="font-bold font-sans py-10 text-5xl text-center pb-5">
          Coding
        </h1>
        <div className="flex justify-center md:gap-10 gap-4 flex-wrap lg:mx-10 md:mx-5 sm:mx-2 mx-2 ">
          {loading ? (
            <Loader />
          ) : (
            Coding_blog.map((blog) => {
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
      <Footer />
    </>
  );
};

export default CodeDetail;
