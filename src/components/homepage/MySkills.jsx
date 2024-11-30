/* eslint-disable react/prop-types */
import { CiServer } from "react-icons/ci";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
// import MERN_STACK_IMG from "../../assets/MERN.png";
import MERN_STACK_IMG2 from "../../assets/MERN2.png";
import Spark from "../../assets/spark.png";

const MySkills = () => {
  const SkillList = (props) => {
    return (
      <li className="flex items-center justify-center gap-2 lg:justify-start">
        <div className={`icon rounded-lg border p-2 text-2xl ${props.color}`}>
          {props.icon}
        </div>
        <p className="w-[120px] text-base font-[600] text-gray-800 xl:w-[120px] xl:text-lg">
          {props.title}
        </p>
        <div className="outer_line relative h-[25px] w-[70%] overflow-hidden rounded-full bg-gray-300 lg:w-[280px] xl:w-[350px]">
          <div
            className={`inner_line h-full ${props.percentage} bg-[#6c82ff]`}
          ></div>
          <span className="absolute left-0 top-[50%] w-full -translate-y-[50%] text-center text-xs text-white">
            {props.percentage.match(/\d+/)[0]}%
          </span>
        </div>
      </li>
    );
  };
  return (
    <div className="bg-white" id="skills">
      <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px] xl:py-[125px]">
        <h2 className="relative mb-2 text-lg font-[600] text-[#6077f2]">
          My Skills
          <div className="absolute -left-[20px] -top-[20px] h-full w-full">
            <img src={Spark} alt="spark image" className="h-[30px]" />
          </div>
        </h2>
        <h3 className="mb-3 text-center text-3xl font-[600] capitalize text-gray-800">
          Technologies I&apos;m expert at
        </h3>
        {/* <p className="font-[500] text-gray-800">
          Unveiling Ahsan&apos;s Tech Wizardry
        </p> */}
        {/* <div className="img_container my-5 w-[90%] max-w-[50%]">
          <img src={MERN_STACK_IMG} className="" alt="MERN Stack image" />
        </div> */}
        <div className="img_container my-5 w-[90%] max-w-[50%]">
          <img src={MERN_STACK_IMG2} className="" alt="MERN Stack image" />
        </div>
        <div className="skills_container mt-5 grid w-full grid-cols-1 gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-0">
          <div className="left flex flex-col gap-5 sm:gap-8 lg:items-start lg:border-r-4 xl:items-center">
            <h2 className="mx-auto flex items-center gap-2 rounded-lg border-2 bg-gray-100 px-8 py-2 text-lg font-bold text-gray-700 underline-offset-4 sm:text-xl">
              <FaCode className="text-xl sm:text-2xl" /> Frontend Skills
            </h2>
            <ul className="skills flex flex-col gap-y-3 sm:gap-y-5">
              <SkillList
                title="HTML 5"
                percentage="w-[95%]"
                icon={<FaHtml5 />}
                color="text-[#E34C26]"
              />
              <SkillList
                title="CSS 3"
                percentage="w-[90%]"
                icon={<FaCss3Alt />}
                color="text-[#264DE4]"
              />
              <SkillList
                title="JavaScript"
                percentage="w-[80%]"
                icon={<IoLogoJavascript />}
                color="text-[#F7DF1E]"
              />
              <SkillList
                title="Tailwind CSS"
                percentage="w-[90%]"
                icon={<SiTailwindcss />}
                color="text-[#38B2AC]"
              />
              <SkillList
                title="React.js"
                percentage="w-[80%]"
                icon={<FaReact />}
                color="text-[#61DAFB]"
              />
            </ul>
          </div>
          <div className="right flex flex-col gap-5 sm:gap-8 lg:items-end xl:items-center">
            <h2 className="mx-auto flex items-center gap-2 rounded-lg border-2 bg-gray-100 px-8 py-2 text-lg font-bold text-gray-700 underline-offset-4 sm:text-xl">
              <CiServer className="text-xl sm:text-2xl" /> Backend Skills
            </h2>
            <ul className="skills flex flex-col gap-y-3 sm:gap-y-5">
              <SkillList
                title="Node.js"
                percentage="w-[92%]"
                icon={<FaNodeJs />}
                color="text-[#339933]"
              />
              <SkillList
                title="Express.js"
                percentage="w-[80%]"
                icon={<SiExpress />}
                color="text-[#000000]"
              />
              <SkillList
                title="MongoDB"
                percentage="w-[85%]"
                icon={<SiMongodb />}
                color="text-[#47A248]"
              />
              <SkillList
                title="EJS"
                percentage="w-[80%]"
                icon={<FaCode />}
                color="text-[#6B7280]"
              />
              <SkillList
                title="GitHub"
                percentage="w-[90%]"
                icon={<FaGithub />}
                color="text-[#181717]"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
