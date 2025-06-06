import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";

const BlogDetails = () => {
  const [BlogImagePreview, SetBlogImagePreview] = useState();
  const [allBlogs, setAllBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const blogs = {
    category: "",
    title: "",
    blog_img: "",
    about: "",
  };

  const { id } = useParams();
  const [blog, setBlog] = useState(blogs);

  const BlogImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        SetBlogImagePreview(reader.result);
        setBlog({ ...blog, blog_img: file });
      };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const single = await axios.get(
          `https://my-blog-app-x13f.onrender.com/api/blog//getOne/${id}`
        );
        const all = await axios.get(
          `https://my-blog-app-x13f.onrender.com/api/blog/GetAll`
        );
        setBlog(single.data);
        setAllBlogs(all.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (blog && allBlogs.length > 0) {
      const related = allBlogs.filter(
        (b) => b.category === blog.category && b._id !== blog._id
      );
      setRelatedBlogs(related);
    }
  }, [blog, allBlogs]);

  return (
    <>
      <div className="sm:mx-5 lg:mx-10">
        <h1 className="text-3xl sm:text-5xl text-start sm:px-16 pt-5 pl-5">
          {blog.category}
        </h1>
        {loading ? (
          <Loader/>
        ) : (
        <div className="flex justify-center flex-wrap lg:flex-nowrap mt-5">
          <div className="lg:w-[70%] w-full ">
            <img
              className="md:px-20 sm:px-10 w-full md:h-[430px] px-2"
              src={
                BlogImagePreview ||
                blog.blog_img?.url ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUqy_SZxyRxG5X8EFwFZhxLseYirbZcDzWQ&s"
              }
              alt="Blog Preview"
            />
            <input
              type="file"
              name="blog_img"
              accept="image/*"
              onChange={BlogImage}
              className="rounded-md outline-none border-2 border-gray-400 py-1 focus:bg-gray-400 pl-2 my-3 w-[100%] hidden"
            />
            <span>
              <h1 className="font-bold pt-5 sm:text-3xl text-xl text-center">
                {blog.title}
              </h1>
              <br />
              <p className="p-4 sm:px-10 md:px-16 text-lg">{blog.about}</p>
            </span>
          </div>

          {/* related blog section */}
          <div className="lg:w-[30%] border-t-2 border-gray-400 lg:border-t-transparent lg:border-l-2  w-full lg:relative lg:-top-16">
            <h1 className="pb-5 font-bold text-2xl text-center">
              Related Blogs
            </h1>
            <div className="flex lg:flex-col gap-5 w-full overflow-x-auto lg:overflow-y-auto lg:h-[700px] h-[300px] p-3  scrollbar-hide">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((rel) => (
                  <div
                    key={rel._id}
                    className="min-w-[250px] lg:min-w-full bg-white border-b-4 border-b-gray-300 cursor-pointer"
                  >
                    <NavLink to={`/blog_details/${rel._id}`}>
                      <img
                        src={rel.blog_img.url}
                        alt=""
                        className="w-full lg:h-60 h-44 "
                      />
                    </NavLink>
                    <h1 className="py-5 text-center text-xl font-bold">
                      {rel.title}
                    </h1>
                   
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No related blogs found.
                </p>
              )}
            </div>
          </div>
        </div>
        )}
        
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
