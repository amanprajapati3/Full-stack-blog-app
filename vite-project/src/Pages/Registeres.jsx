import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registeres = () => {

    const users = {
      name: "",
      email: "",
      password: "",
      phone: "",
      education: "",
      role: "",
    };
  
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
  
    // Handles the input changes and updates the state
    const inputHandler = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
  
    // Handles form submission
    const HandleSubmitForm = async (e) => {
      e.preventDefault();
  
      // Log the user object before making the request to check its structure
      console.log("User data to send:", user);
  
      // Simple check if all required fields are filled
      if (
        !user.name ||
        !user.email ||
        !user.password ||
        !user.phone ||
        !user.education ||
        !user.role
      ) {
        toast.error("Please fill in all fields.");
        return;
      }
  
      // Send the data to the backend
      try {
        const response = await axios.post("http://localhost:3600/api/users/registered", user
           
        );

        toast.success(response.data.msg, { position: "top-right" });
  
        // Reset form to initial state after successful registration
        setUser(users);
        navigate("/");
      } catch (error) {
        console.error("Error during registration:", error.response?.data || error);
        toast.error(error.response?.data?.msg || "Something went wrong. Please try again.");
      }
    };
  

  return (
    <>
      <div className="flex justify-center mt-12 mb-12">
        <div className="rounded-xl  shadow-2xl shadow-gray-800 p-5">
          <h1 className="text-center text-xl lg:text-3xl">
            Aman<span className="text-blue-700">Blog</span>
          </h1>
          <h1 className="font-bold py-5 text-left lg:text-xl">Register</h1>
          <form action={"/registered"} className="ml-5 " onSubmit={HandleSubmitForm} >
            <select
              name="role"
              onChange={inputHandler}
              className="rounded-md border-2 border-gray-500 outline-none  w-[100%] py-2 pl-2 my-3 focus:bg-gray-200"
            >
              <option value="">Select Roles</option>
              <option value="admin" name="admin">
                {" "}
                Admin
              </option>
              <option value="user" name="user">
                User
              </option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={inputHandler}
              required
              className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Your E-mail"
              name="email"
              required
              onChange={inputHandler}
              className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />{" "}
            <br />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              required
              onChange={inputHandler}
             className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={inputHandler}
             className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />
            <select
              name="education"
              id="education"
              required
              onChange={inputHandler}
             className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            >
              <option value="Select Roles">Select Your Education</option>
              <option value="UnderGraduate" name="UnderGraduate">
                {" "}
                Under Graduate
              </option>
              <option value="PostGraduate" name="PostGraduate">
                Post Graduate
              </option>
              <option value="10th" name="10th">
                10th
              </option>
              <option value="12th" name="12th">
               12th
              </option>
            </select>
            <center className="py-2">Already registered? <a href="/login" className="text-blue-700">Login</a></center>
            <button type="submit" className="rounded-md bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4 w-[100%] py-1">
                Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registeres;
