import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
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
      <div className="mt-16 mb-16 mx-5 flex justify-center">
        <div className="flex flex-wrap gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  md:grid-cols-3 lg:grid-cols-4 lg:mx-32 md:mx-5 sm:mx-2 mx-2 mt-6">
            {blogs.slice(3, 7).map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="border-2 border-gray-300 rounded-2xl p-2 cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <img src={blog.blog_img.url} alt="" className="w-full h-60  transition-all duration-200 filter grayscale-100 hover:grayscale-0" />
                  <h1 className="text-2xl font-sans font-bold text-center pt-4">
                    {blog.category}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
