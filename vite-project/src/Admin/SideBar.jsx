import axios from "axios";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SideBar = ({ setComponent }) => {
  const [admin, setAdmin] = useState([]);
  const [IsMenu, SetIsMenu] = useState(false);

  const ToggleMenu = () => {
    SetIsMenu(!IsMenu);
  };

  const navigate = useNavigate();

  const GoToHome = () => {
    navigate("/");
  };

  const HandleComponents = (value) => {
    setComponent(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3600/api/users/AllAdmin"
        );
        console.log(response.data); // Log data to console
        setAdmin(response.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data: ", error); // Log error details
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        {/* Menu Button */}
        <div className="md:hidden fixed top-12 left-7 z-50">
          <button className="text-2xl hover::cursor-pointer" onClick={ToggleMenu}>
            {IsMenu ? <FaArrowLeft /> : <RiMenu2Fill />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed md:relative bg-white w-84 h-full shadow-2xl shadow-gray-400 transition-transform duration-300 transform z-40
          ${IsMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {admin.slice(0, 1).map((admins) => (
            <div key={admins._id} className="text-center pt-6">
              <img
                src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                alt="Profile"
                className="w-32 rounded-full mx-auto"
              />
              <h1 className="text-xl font-bold py-4">{admins.name}</h1>
            </div>
          ))}
<div className="text-center">
          <ul className="mt-5 w-[100%]">
            <li className="mb-5 ">
              <button
                onClick={() => HandleComponents("My_blog")}
                className=" hover:cursor-pointer text-white bg-green-900 py-2 px-20 md:px-28 rounded-xl hover:bg-green-700"
              >
                My Blog
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("Create_blog")}
                className=" hover:cursor-pointer text-white bg-blue-900 py-2 px-16 md:px-[90px] rounded-xl hover:bg-blue-700"
              >
                Create Blog
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("My_profile")}
                className=" hover:cursor-pointer text-white bg-purple-900 py-2 px-16 md:px-[103px] rounded-xl hover:bg-purple-700"
              >
                My Profile
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={GoToHome}
                className=" hover:cursor-pointer text-white bg-red-700 py-2 px-16 md:px-[120px] rounded-xl hover:bg-red-500"
              >
                Home
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("")}
                className=" hover:cursor-pointer text-white bg-yellow-500 py-2 px-16 md:px-[115px] rounded-xl hover:bg-yellow-400"
              >
                Logout
              </button>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
