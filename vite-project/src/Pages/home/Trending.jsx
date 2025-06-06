import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";

const Trending = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/blog/GetAll"
        );
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    lg_desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
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
      <h1 className="font-bold text-center pt-8 font-sans text-3xl sm:text-5xl sm:pb-10 ">
        Our Latest Blogs
      </h1>
      <div className=" md:mx-20 mb-20 p-5">
        {loading ? (
          <Loader />
        ) : (
          <Carousel responsive={responsive}>
            {blogs.slice(0, 4).map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="p-3 overflow-hidden cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <NavLink to={`/blog_details/${blog._id}`}>
                    <img
                      src={blog.blog_img.url}
                      alt=""
                      className="w-full h-60 gap-4 transition-all duration-300 hover:scale-110"
                    />
                  </NavLink>
                  <h1 className="pl-1 pt-3 text-center text-xl font-bold ">
                    {blog.title}
                  </h1>
                  <p className=" pr-1 overflow-hidden h-[70px] pl-1">
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
            })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Trending;
