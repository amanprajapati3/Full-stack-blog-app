import axios from 'axios';
import { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Creator = () => {

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
        } finally{
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  

  return (
    <>
    <div className="mb-16 mt-8">
    <h1 className="font-bold font-sans text-3xl md:text-5xl text-center">Creators</h1>
    {loading ? (
      <Loader/>
    ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:mx-16 sm:mx-10 mx-7 mt-6">
    {admin.slice(0, 8).map((admins) => {
      return (
        <div key={admins._id} className='border-2 border-gray-300 rounded-2xl p-2'>
          {" "}
          {/* Use a unique identifier like _id */} <img
            src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
            alt=""
            className=""
          />
          <center>
          <img
                src="https://i.pinimg.com/736x/f1/a6/63/f1a663a0796011bb3fbc688b0169335d.jpg"
                alt=""
                className="w-16 p-1 rounded-[70%] border-[4px] border-gray-700 relative -mt-5"
              />
              </center>
          <h1 className="text-2xl font-sans font-bold text-center pt-4">{admins.name}</h1>
          <h1 className="font-sans pt-2 text-center">{admins.email}</h1>
          <h1 className="font-sans text-center">{admins.phone}</h1>
          <h1 className="font-sans text-center">{admins.role}</h1>
        </div>
      );
    })}
    </div>
    )}
    
    <Footer/>
  </div>
  </>
  )
}

export default Creator