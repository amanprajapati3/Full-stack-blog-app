import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

const user = {
    role: "",
    email: "",
    password: "",
}

const [Users, setUser] = useState(user);
const navigate = useNavigate();

const form_data = (e) => {
  const { name, value } = e.target;
  setUser({ ...Users, [name]: value });
  console.log(Users);
};

const HandleSubmitForm = async (e) => {
  e.preventDefault();
  await axios
    .post("https://my-blog-app-x13f.onrender.com/api/users/login", Users)
    .then((response) => {
      toast.success(response.data.msg, {position:"top-right"})
      console.log(response.data);
      setUser("");
      navigate("/login");
    })
    .catch((error) => console.log(error));
};

  return (
    <>
     <div className="flex justify-center mt-12 mb-12">
        <div className="rounded-xl shadow-2xl shadow-gray-800 p-5">
          <h1 className="text-center text-xl">
            Aman<span className="text-blue-700">Blog</span>
          </h1>
          <h1 className="font-bold py-5 text-xl text-left">Login</h1>
          <form action="/register" method="post" className="ml-5 text-sm" onSubmit={HandleSubmitForm}>
            <select
              name="role"
              id="roles"
              onChange={form_data}
              required
               className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
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
              type="email"
              placeholder="Your E-mail"
              name="email"
              required
              onChange={form_data}
               className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={form_data}
               className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-200 pl-2 my-3 w-[100%]"
            />
            <center className="py-2">New User? <NavLink to={"/registered"} className="text-blue-700">Register</NavLink></center>
            <button type="submit" className="rounded-md bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4 w-[100%] py-1 hover:bg-blue-500">
                Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;