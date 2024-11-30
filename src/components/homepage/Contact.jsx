import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spark from "../../assets/spark.png";
import ContactImg from "../../assets/work-time.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URI}/mail/new-mail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "bottom-center",
          autoClose: 3000,
        });
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to send message :(", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-white" id="contact">
      <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px] xl:py-[125px]">
        <h2 className="relative mb-3 text-lg font-[600] text-[#6077f2]">
          Contact me
          <div className="absolute -left-[20px] -top-[20px] h-full w-full">
            <img src={Spark} alt="spark image" className="h-[30px]" />
          </div>
        </h2>
        <h3 className="mb-3 text-3xl font-[600] text-gray-800">Get In Touch</h3>
        <p className="text-center font-[500] text-gray-500">
          Message me, and I&apos;ll respond faster than a pizza disappears at a
          party! 🍕
        </p>
        <div className="items_container mt-8 grid w-full grid-cols-1 items-center lg:grid-cols-2 xl:gap-10">
          <div className="image">
            <img
              src={ContactImg}
              alt="tom is waiting"
              className="mx-auto w-[90%] sm:w-[70%] lg:mx-0 lg:w-full 2xl:w-[85%]"
            />
          </div>
          <form
            className="mt-10 grid w-full grid-cols-2 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your Name"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 font-[600] text-gray-800 focus:outline-[#6077f2] sm:col-span-1"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 font-[600] text-gray-800 focus:outline-[#6077f2] sm:col-span-1"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter the Subject"
              className="col-span-2 w-full rounded-lg border-2 border-[#dadada] px-3 py-2 font-[600] text-gray-800 focus:outline-[#6077f2]"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              className="col-span-2 h-[250px] w-full resize-none rounded-lg border-2 border-[#dadada] px-3 py-2 font-[600] text-gray-800 focus:outline-[#6077f2] lg:h-[220px] xl:h-[300px]"
              placeholder="Enter the Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="button col-span-2 flex flex-col items-center">
              <button
                type="submit"
                className="flex items-center gap-2 rounded bg-[#6077f2] px-5 py-2 font-[600] text-white transition-all hover:gap-3 hover:bg-[#3957ff]"
              >
                Send Message <IoMdSend className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
