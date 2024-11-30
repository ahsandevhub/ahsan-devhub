/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { LuServerCog } from "react-icons/lu";
import { MdImportantDevices, MdOutlineSpaceDashboard } from "react-icons/md";
import Spark from "../../assets/spark.png";

const MyServices = () => {
  const ServiceCard = (props) => {
    return (
      <div className="card flex flex-col items-center justify-between gap-5 rounded-lg bg-white px-8 py-10 text-center text-gray-800 shadow-lg transition-all duration-300 hover:scale-[103%]">
        <div className="top flex flex-col items-center gap-5">
          <div className="icon rounded-lg bg-[#111532] p-4 text-3xl text-white">
            {props.icon}
          </div>
          <h2 className="title text-2xl font-bold">{props.title}</h2>
          <p className="text">{props.text}</p>
        </div>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-3 flex items-center gap-2 font-semibold hover:gap-3 hover:transition-all"
        >
          <span>Show Example</span> <BsArrowRight className="text-lg" />
        </a>
      </div>
    );
  };

  return (
    <div className="bg-[#101431]" id="services">
      <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px] xl:py-[125px]">
        <h2 className="relative mb-2 text-lg font-[600] text-[#6077f2]">
          My Services
          <div className="absolute -left-[20px] -top-[20px] h-full w-full">
            <img src={Spark} alt="spark image" className="h-[30px]" />
          </div>
        </h2>
        <h3 className="mb-3 text-center text-3xl font-[600] capitalize text-white">
          Crafting Digital Dreams with MERN Magic!
        </h3>
        <p className="text-center font-[500] text-gray-50">
          I&apos;ll tackle your tasks faster than a squirrel on a caffeine high!
          🐿️
        </p>
        <div className="card_container mt-[50px] grid w-full gap-12 lg:grid-cols-2 xl:grid-cols-3 [&>*:nth-child(2)]:bg-[#6077f2] [&>*:nth-child(2)]:text-white">
          <ServiceCard
            icon={<MdImportantDevices />}
            title="Responsive Frontend"
            text="I specialize in responsive frontend development utilizing Tailwind
            CSS and React.js. From crafting captivating portfolio showcases to
            dynamic travel platforms, e-commerce ventures, and real estate
            listings, I ensure seamless user experiences and visually stunning
            interfaces tailored to individual needs."
            href="/portfolio-details/robogear-bd"
          />
          <ServiceCard
            icon={<LuServerCog />}
            title="Backend Engineering"
            text="I utilize MongoDB, Node.js, Express.js, and EJS for backend development. From scalable database solutions to efficient server-side logic, my expertise ensures seamless integration and optimized performance for a wide range of projects. Whether it's crafting APIs, managing data, or implementing server-side rendering, I provide tailored solutions to meet your backend needs."
            href="/portfolio-details/robogear-bd-admin"
          />
          <ServiceCard
            icon={<MdOutlineSpaceDashboard />}
            title="Dashboard Creation"
            text="Specializing in Dashboard website development with the MERN stack, I create dynamic admin and user dashboards. From streamlined order and user management to intuitive data visualization, my expertise ensures efficient functionality tailored to your specific needs."
            href="/portfolio-details/robogear-bd-admin"
          />
        </div>
      </div>
    </div>
  );
};

export default MyServices;
