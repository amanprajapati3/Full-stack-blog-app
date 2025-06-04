import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <div className="sm:px-16  bg-gray-300  flex justify-between sticky w-full z-10 px-2 top-0">
        <div>
          <NavLink to={"/"}>
            <h1 className="text-2xl lg:text-3xl pt-3 font-sans hover:text-blue-700">
              Aman<span className="text-blue-800 hover:text-black">Blog</span>
            </h1>
          </NavLink>
        </div>
        <nav className="">
          <ul className="hidden md:flex h-full ">
            <li className="py-5 px-3 hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all hover:scale-110">
              <NavLink to={"/"}>Home</NavLink>
              <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
            </li>
            <li className="py-5 px-3 hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all hover:scale-110">
              <NavLink to={"/blog"}>Blog</NavLink>
              <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
            </li>
            <li className="py-5 px-3 hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all hover:scale-110">
              <NavLink to={"/creators"}>Creator</NavLink>
              <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
            </li>
            <li className="py-5 px-3 hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all hover:scale-110">
              <NavLink to={"/about"}>About</NavLink>
              <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
            </li>
            <li className="py-5 px-3 hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all hover:scale-110">
              <NavLink to={"/Contact"}>Contact</NavLink>
              <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
            </li>
          </ul>
        </nav>
        <div className="flex sm:gap-5 gap-2 sm:mr-1 my-3">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-xl pt-1 sm:text-2xl cursor-pointer">
              {IsMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <button className="p-1 h-fit bg-blue-800 hover:opacity-90 text-white rounded-sm">
            {" "}
            <NavLink to={"/dashboard"}>Admin</NavLink>
          </button>
          <button className="p-1 h-fit  bg-red-800 hover:opacity-90 text-white rounded-sm">
            {" "}
            <NavLink to={"/registered"}>Login</NavLink>
          </button>
        </div>
      </div>
      {/* navbar for mobile responsive */}
      <div className="flex text-center justify-center">
        <ul
          className={`transition-all duration-300 ${
            IsMenuOpen ? "block scale-y-100 mt-4 " : "hidden scale-y-0"
          }`}
        >
          <li className="py-1 px-20 rounded-md hover:scale-110 transition-all duration-300 hover:text-blue-600 ">
            <NavLink to={"/"}>Home</NavLink>
            <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
          </li>
          <li className="py-1 px-20 rounded-md hover:scale-110 transition-all duration-300 hover:text-blue-600 ">
            <NavLink to={"/blog"}>Blog</NavLink>
            <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
          </li>
          <li className="py-1 px-20 rounded-md hover:scale-110 transition-all duration-300 hover:text-blue-600 ">
            <NavLink to={"/creators"}>Creators</NavLink>
            <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
          </li>
          <li className="py-1 px-20 rounded-md hover:scale-110 transition-all duration-300 hover:text-blue-600 ">
            <NavLink to={"/about"}>About</NavLink>
            <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
          </li>
          <li className="py-1 px-20 rounded-md hover:scale-110 transition-all duration-300 hover:text-blue-600 ">
            <NavLink to={"/contact"}>Contact</NavLink>
            <hr className="w-3/4 h-[2px] ml-1 text-blue-700 hidden" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
