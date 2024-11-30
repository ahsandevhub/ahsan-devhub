/* eslint-disable react/prop-types */
import {
  FaCode,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101431]">
      <div className="container mx-auto grid grid-cols-1 gap-x-[50px] gap-y-[50px] px-3 py-[26px] text-center text-gray-50 sm:grid-cols-2 sm:px-[26px] sm:text-start lg:py-[50px] xl:grid-cols-4 2xl:gap-x-[100px]">
        <div className="left">
          <div className="logo mb-3 flex items-center justify-center gap-2 text-xl sm:justify-normal">
            <FaCode className="text-2xl" />
            <span className="font-[600]">Ahsan</span>
            <span className="font-[800] text-[#6277ee]">DevHub</span>
          </div>
          <div className="text mb-8 text-sm text-gray-300">
            I&apos;m Ahsan Habib, a Full Stack MERN developer. I specialize in
            crafting engaging web experiences using React for the frontend and
            Node.js, Express.js, and MongoDB for the backend. My focus is on
            creating high-performance and maintainable code.
          </div>
          <h3 className="mb-2 text-lg font-[600]">Follow me:</h3>
          <ul className="social_icons flex items-center justify-center gap-x-3 sm:justify-normal">
            <SocialIcon
              href="https://www.linkedin.com/in/ahsan-habib-bb874920b/"
              icon={<FaLinkedinIn />}
            />
            <SocialIcon
              href="https://github.com/armanahsanhabib/"
              icon={<FaGithub />}
            />
            <SocialIcon
              href="https://www.facebook.com/webDevWithAhsan/"
              icon={<FaFacebookF />}
            />
            <SocialIcon
              href="https://www.youtube.com/@webDevWithAhsan"
              icon={<FaYoutube />}
            />
          </ul>
        </div>
        <div className="center col-span-1 grid grid-cols-1 gap-10 sm:order-first sm:col-span-2 sm:grid-cols-2 xl:order-none">
          <div className="center_left">
            <h3 className="mb-5 text-lg font-[600]">Categories:</h3>
            <ul className="list-inside text-gray-300 sm:list-disc">
              <li>Portfoio/Resume Website</li>
              <li>E-commerce Website</li>
              <li>Travel Agency Website</li>
              <li>Real Estate Website</li>
              <li>Health/Fitness Website</li>
              <li>Food/Cooking Website</li>
              <li>Crypto Website</li>
              <li>Finance/Investment Website</li>
            </ul>
          </div>
          <div className="center_right">
            <h3 className="mb-5 text-lg font-[600]">Services:</h3>
            <ul className="list-inside text-gray-300 sm:list-disc">
              <li>Frontend UI/UX Design</li>
              <li>Responsive Web Development</li>
              <li>Backend Engineering</li>
              <li>API Integration</li>
              <li>Dashboard Creation</li>
              <li>Database Architecture</li>
              <li>Authentication Implementation</li>
              <li>User Administration</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h3 className="mb-5 text-lg font-[600]">Contact me:</h3>
          <ul className="social_icons flex flex-col gap-y-4 text-gray-300">
            <li className="flex items-center justify-center gap-3 sm:justify-normal">
              <FaLocationDot className="h-6 w-6 rounded bg-gray-50 p-1 text-base text-gray-800" />
              <span className="">827/282 C&B Road, Barishal, Bangladesh.</span>
            </li>
            <li className="flex items-center justify-center gap-3 sm:justify-normal">
              <FaEnvelope className="h-6 w-6 rounded bg-gray-50 p-1 text-base text-gray-800" />
              <a
                href="mailto:contact2ahsanhabib@gmail.com"
                className="break-words"
              >
                contact2ahsanhabib@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-3 sm:justify-normal">
              <FaPhoneAlt className="h-6 w-6 rounded bg-gray-50  p-1 text-base text-gray-800" />
              <span>+880 1704-428814</span>
            </li>
            <li className="flex items-center justify-center gap-3 sm:justify-normal">
              <FaWhatsapp className="h-6 w-6 rounded bg-gray-50  p-1 text-base text-gray-800" />
              <span>+880 1704-428814</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = (props) => {
  return (
    <li className="">
      <a
        className="block rounded-md bg-gray-50 p-2 text-lg text-gray-800 transition-all hover:bg-blue-100"
        href={props.href}
        target="_blank"
      >
        {props.icon}
      </a>
    </li>
  );
};

export default Footer;
