import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
   setIsMenuOpen(!IsMenuOpen);
  }

  return (
    <>
      <div className="sm:px-10 py-4 bg-blue-100 shadow-xl shadow-gray-300 flex justify-between relative top-0">
        <div>
          <a href="/">
          <label htmlFor="" className="text-2xl lg:text-4xl font-sans p-1 hover:text-blue-700">
            Aman<span className="text-blue-800 hover:text-black">Blog</span>
          </label>
          </a>

          {/* navbar for mobile responsive */}
          <ul className={`${IsMenuOpen?"block mt-4 w-[100%]":"hidden"}`}>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="/" className=" rounded-md lg:text-xl ">HOME</a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="/blog"  className=" rounded-md lg:text-xl ">BLOGS</a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="/creators"  className=" rounded-md lg:text-xl ">CREATORS</a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="/about"  className=" rounded-md lg:text-xl ">ABOUT</a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="/contact"  className=" rounded-md lg:text-xl ">CONTACT</a>
            </li>
          </ul>
        </div>
        <nav className="">
          <ul className="hidden md:flex gap-4 mt-1">
            <li>
              <a href="/" className="hover:bg-blue-600 hover:text-white rounded-md p-1 lg:text-xl">HOME</a>
            </li>
            <li>
              <a href="/blog"  className="hover:bg-blue-600 hover:text-white rounded-md p-1 lg:text-xl">BLOGS</a>
            </li>
            <li>
              <a href="/creators"  className="hover:bg-blue-600 hover:text-white rounded-md p-1 lg:text-xl">CREATORS</a>
            </li>
            <li>
              <a href="/about"  className="hover:bg-blue-600 hover:text-white rounded-md p-1 lg:text-xl">ABOUT</a>
            </li>
            <li>
              <a href="/contact"  className="hover:bg-blue-600 hover:text-white rounded-md p-1 lg:text-xl">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 mr-3">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl pt-1 sm:text-2xl">
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
          </div>
          <button className="p-1 h-fit lg:text-xl bg-blue-800 hover:opacity-90 text-white rounded-sm">
            {" "}
            <a href="/dashboard">Dashboard</a>
          </button>
          <button className="p-1 h-fit lg:text-xl bg-red-800 hover:opacity-90 text-white rounded-sm">
            {" "}
            <a href="/registered">Register</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
