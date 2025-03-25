import axios from "axios";
import { useEffect, useState } from "react";

const Games = () => {

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

  const Coding_blog = blogs.filter((blog)=> blog.category === "gaming");


  return (
    <>
     <h1 className="font-bold font-sans text-2xl  pl-24">Gaming</h1>
     <p className='text-center py-2 '>Here you will get all the posted blog about the game by the creators and those who have better experience in Game</p>
    <div className="mt-5 mb-16 mx-5 flex justify-center">
        <div className="flex flex-wrap gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  md:grid-cols-3 lg:grid-cols-4 lg:mx-32 md:mx-5 sm:mx-2 mx-2">
            {Coding_blog.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="border-2 border-gray-300 rounded-2xl p-2 cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <a href={`/blog_details/${blog._id}`}>
                  <img src={blog.blog_img.url} alt="" className="w-full h-60  transition-all duration-200 rounded-xl filter grayscale-100 hover:grayscale-0" />
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
    </>
  )
}

export default Games