import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Coding = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3600/api/blog/GetAll"
        );
        console.log(response.data); 
        setBlogs(response.data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const Coding_blog = blogs.filter((blog)=> blog.category === "coding");

  return (
    <>
     <h1 className="font-bold font-sans text-2xl md:pl-24 text-center md:text-start">Coding</h1>
     <p className='text-center text-sm py-2 px-3'>Here you will get all the latest and useful coding blog with daily updated news and tips.</p>
    <div className="mt-5 mb-16 mx-5 flex justify-center">
        <div className="flex flex-wrap gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  md:grid-cols-3 lg:grid-cols-4 lg:mx-32 md:mx-5 sm:mx-2 mx-2 ">
            {Coding_blog.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="border-2 border-gray-300 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <NavLink to={`/blog_details/${blog._id}`}>
                  <img src={blog.blog_img.url} alt="" className="w-full h-60  transition-all duration-300 rounded-xl hover:scale-110" />
                  </NavLink>
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

export default Coding
