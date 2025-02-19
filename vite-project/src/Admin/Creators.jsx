import axios from "axios";
import { useEffect, useState } from "react";

const Creators = () => {
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
      <div className="mb-16">
        <h1 className="font-bold font-sans text-3xl pl-24">Creators</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7  md:grid-cols-3 lg:grid-cols-4 mx-32 mt-6">
        {admin.slice(0, 4).map((admins) => {
          return (
            <div key={admins._id}>
              {" "}
              {/* Use a unique identifier like _id */} <img
                src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                alt=""
                className="w-[90%] rounded-[70%] border-4 border-gray-300 p-5"
              />
              <h1 className="text-xl font-sans font-bold text-center py-4">{admins.name}</h1>
              <h1 className="text-xl font-sans font-bold text-center">{admins.role}</h1>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Creators;
