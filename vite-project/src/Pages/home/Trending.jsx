import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const Trending = () => {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h1 className="font-bold text-center md:text-left font-sans text-2xl pb-10 md:pl-24">Trending</h1>
      <div className="border-2 border-gray-300 md:mx-20 mb-20 p-5 rounded-xl">
        <Carousel responsive={responsive}>
          {blogs.slice(0, 8).map((blog) => {
            return (
              <div
                key={blog._id}
                className="border-2 border-gray-300 rounded-2xl gap-5 overflow-hidden cursor-pointer"
              >
                {" "}
                {/* Use a unique identifier like _id */}{" "}
                <NavLink to={`/blog_details/${blog._id}`}>
                <img
                  src={blog.blog_img.url}
                  alt=""
                  className="w-full h-60 transition-all duration-300 rounded-xl hover:scale-110"
                />
                </NavLink>
                <h1 className="text-2xl relative -mt-10 mb-5 ml-5 text-purple-300 font-sans font-bold ">
                  {blog.category}
                </h1>
                <p className="relative  mb-5 ml-5  font-sans  ">
                  {blog.title}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Trending;
