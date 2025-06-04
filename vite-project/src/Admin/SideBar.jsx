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

  // Fetch admin data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/users/AllAdmin"
        );
        setAdmin(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  // Prevent background scroll when sidebar is open on mobile
  useEffect(() => {
    if (IsMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [IsMenu]);

  return (
    <>
      {/* Mobile menu toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button className="text-3xl cursor-pointer text-gray-800" onClick={ToggleMenu}>
          {IsMenu ? <FaArrowLeft /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Backdrop for mobile sidebar */}
      {IsMenu && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={ToggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-gray-200 w-72 h-full shadow-2xl shadow-gray-400 transition-transform duration-300 transform z-50
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

        <div className="text-center bg-gray-100">
          <ul className="mt-5 w-full px-2">
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("My_blog")}
                className="text-white bg-green-900 w-full py-3 cursor-pointer rounded-xl hover:bg-green-700"
              >
                My Blog
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("Create_blog")}
                className="text-white bg-blue-900 w-full py-3 cursor-pointer rounded-xl hover:bg-blue-700"
              >
                Create Blog
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("My_profile")}
                className="text-white bg-purple-900 w-full py-3 cursor-pointer  rounded-xl hover:bg-purple-700"
              >
                My Profile
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={GoToHome}
                className="text-white bg-red-700 w-full py-3 cursor-pointer  rounded-xl hover:bg-red-500"
              >
                Home
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => HandleComponents("")}
                className="text-white bg-yellow-500 w-full py-3 cursor-pointer  rounded-xl hover:bg-yellow-400"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
