import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <div className="sm:px-16 bg-white flex justify-between sticky w-full z-10 px-2 top-0">
        <div>
          <NavLink to={"/"}>
            <h1 className="text-2xl lg:text-3xl pt-3 font-sans hover:text-blue-700">
              Aman<span className="text-blue-800 hover:text-black">Blog</span>
            </h1>
          </NavLink>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex h-full">
            {["/", "/blog", "/creators", "/about", "/Contact"].map((path, index) => (
              <li
                key={index}
                className="py-5 px-3 hover:bg-gray-950 hover:text-white duration-300 transition-all"
              >
                <NavLink to={path}>
                  <p>{["Home", "My Blog", "Creator", "About us", "Contact us"][index]}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex sm:gap-5 gap-2 sm:mr-1 my-3">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl pt-1 sm:text-2xl cursor-pointer"
            >
              {IsMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <button
            title="Admin"
            className="py-2 sm:px-7 px-2 sm:text-2xl h-fit bg-blue-800 hover:text-blue-700 hover:bg-blue-300 cursor-pointer transition-all duration-300 active:scale-95 text-white rounded-sm"
          >
            <NavLink to={"/dashboard"}>
              <GrUserAdmin />
            </NavLink>
          </button>
          <button
            title="Login"
            className="sm:py-2 py-1 sm:px-3 px-2 h-fit bg-orange-700 hover:text-blue-700 hover:bg-blue-300 cursor-pointer transition-all duration-300 active:scale-95 text-white rounded-sm"
          >
            <NavLink to={"/registered"}>Login</NavLink>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        <ul
          className={`fixed top-[55px] right-0 h-screen bg-white z-40 w-[100%]  transform transition-transform duration-500 ease-in-out
          ${IsMenuOpen ? "translate-x-0 shadow-2xl shadow-black" : "translate-x-full "}`}
        >
          {["/", "/blog", "/creators", "/about", "/Contact"].map((path, index) => (
            <li
              key={index}
              className="py-2 px-4 text-center border-b border-gray-600 hover:text-red-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to={path}>
                <p className=" text-gray-900 hover:text-blue-600">
                  {["Home", "My Blog", "Creator", "About us", "Contact us"][index]}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
