import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const UserInfo = {
      access_key: "20183a15-6346-4a7b-ae64-91c36daa7bdc",
      name: data.name,
      email_Id: data.email,
      message: data.message,
    }
    try {
      await axios.post("https://api.web3forms.com/submit", UserInfo);
      toast.success("Your query has be sent successfully.");
    } catch (error) {
      toast.error("Error! please send again.", error);
    }
  };

  return (
    <>
      <div className="mt-16 flex justify-center mx-auto">
        <div className="p-5">
          <h1 className="text-2xl text-center font-bold font-mono lg:text-3xl">
            Contact Us
          </h1>
          <div className="mt-3 justify-center flex gap-10 flex-wrap">
            <div>
              <label htmlFor="" className="font-bold font-sans lg:text-xl">
                Send us a message
              </label>{" "}
              <br />
              <form
                action="/"
                method="post"
                className="mt-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="border-2 border-gray-500 focus:bg-gray-200 outline-none pl-2 py-2  rounded-md w-[100%]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                {" "}
                <br />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  name="email"
                  className="border-2 border-gray-500 focus:bg-gray-200 outline-none pl-2 my-3 py-2  rounded-md w-[100%]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}{" "}
                <br />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="border-2 border-gray-500 focus:bg-gray-200 outline-none pl-2 my-3 py-2  rounded-md w-[100%]"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <button
                  type="submit"
                  className="rounded-md bg-black text-white py-3 w-[100%] hover:bg-gray-900 active:bg-black hover:cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h1 className="font-bold py-3 lg:text-xl">
                Contact Information
              </h1>
              <div className="flex gap-3 lg:text-xl">
                <span className="text-pink-700 pt-1">
                  <FaPhone />
                </span>
                <span>+91 1234567892</span>
              </div>
              <div className="flex gap-3 my-3 lg:text-xl">
                <span className="text-pink-700 pt-1">
                  <IoMail />
                </span>
                <span>help@amankumargmail.com</span>
              </div>
              <div className="flex gap-3 my-4 lg:text-xl">
                <span className="text-blue-700 pt-1">
                  <FaLocationDot />
                </span>
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
