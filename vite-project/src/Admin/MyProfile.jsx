import axios from "axios";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/users/AllAdmin"
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
    <h1 className="text-2xl font-bold font-sans pt-2">My Profile</h1>
      {admin.slice(0, 1).map((admins) => {
        return (
          <div
            key={admins._id}
            className="sm:ml-20 mt-3 sm:mt-12  rounded-xl flex justify-center"
          >
            <div className="p-12  rounded-xl">
              <img
                src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                alt=""
                className="w-72 rounded-xl"
              />
              <h1 className="text-xl font-sans pt-3 font-bold text-center">
                {admins.name}
              </h1>
              <h1 className="font-sans font-bold text-center">
                {admins.role}
              </h1>
              <h1 className="font-sans pt-2 text-center">
                {admins.email}
              </h1>
              <h1 className="font-sans text-center">
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
