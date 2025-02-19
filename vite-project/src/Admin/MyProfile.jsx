import axios from "axios";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [admin, setAdmin] = useState([]);

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
    <h1 className="text-3xl font-bold font-sans p-5">My Profile</h1>
      {admin.slice(0, 1).map((admins) => {
        return (
          <div
            key={admins._id}
            className="ml-20 mt-12 shadow-2xl shadow-gray-500 rounded-xl"
          >
            <div className="p-12 bg-white rounded-xl">
              <img
                src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                alt=""
                className="w-72 rounded-xl"
              />
              <h1 className="text-xl font-sans pt-3 font-bold text-center">
                {admins.name}
              </h1>
              <h1 className="text-xl font-sans font-bold text-center">
                {admins.role}
              </h1>
              <h1 className="text-xl font-sans pt-2 text-center">
                {admins.email}
              </h1>
              <h1 className="text-xl font-sans text-center">
                Phone: {admins.phone}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MyProfile;
