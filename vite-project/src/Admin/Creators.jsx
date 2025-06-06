import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Creators = () => {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://my-blog-app-x13f.onrender.com/api/users/AllAdmin"
        );
        console.log(response.data); // Log data to console
        setAdmin(response.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data: ", error); // Log error details
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="font-bold font-sans text-3xl sm:text-5xl text-center pb-5">
          Creators
        </h1>
        <div className="flex flex-wrap gap-5 mb-10 justify-center mt-5">
          {loading ? (
            <Loader />
          ) : (
            admin.slice(0, 4).map((admins) => {
              return (
                <div
                  key={admins._id}
                  className="w-[270px] shadow-inner shadow-gray-500"
                >
                  {" "}
                  {/* Use a unique identifier like _id */}{" "}
                  <img
                    src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                    alt=""
                    className="w-[90%] rounded-[70%] border-4 border-gray-300 p-5 ml-3 mt-3"
                  />
                  <h1 className="font-sans font-bold text-center py-1">
                    {admins.name}
                  </h1>
                  <h1 className="font-sans pb-2 font-bold text-center">
                    {admins.role}
                  </h1>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Creators;
