/* eslint-disable react/prop-types */
import { IoMdDoneAll } from "react-icons/io";
import Circles from "../../assets/circles.svg";
import DottedArrow from "../../assets/dotted_lines_arrow.svg";
import man2 from "../../assets/man2.png";
import Spark from "../../assets/spark.png";

const AboutMe = () => {
  const SkillList = (props) => {
    return (
      <li className="flex items-center gap-2">
        <IoMdDoneAll className="text-base text-[#6077f2] sm:text-xl" />
        <p className="w-[175px] text-sm font-[600] text-gray-800 sm:w-[210px] sm:text-base">
          {props.title}
        </p>
        <div className="outer_line h-[10px] w-[150px] overflow-hidden rounded-full bg-gray-300 sm:w-[200px]">
          <div
            className={`inner_line h-full ${props.percentage} rounded-full bg-[#6077f2]`}
          ></div>
        </div>
      </li>
    );
  };
  return (
    <div className="bg-white" id="about">
      <div className="container relative mx-auto grid grid-cols-1 items-center px-3 py-[50px] sm:px-[26px] md:mt-8 lg:mt-0 lg:grid-cols-2 lg:py-[80px] xl:gap-10 xl:py-[125px]">
        <div className="left mb-12 w-full lg:mx-0 lg:mb-0">
          <div className="mx-auto aspect-square rounded-[80px] border-[5px] border-dashed border-[#c5cef8] p-[20px] md:w-[70%] lg:mx-0 lg:w-[90%] xl:w-[90%] 2xl:w-[80%]">
            <div className="img_container relative aspect-square rounded-[80px] bg-[#101431]">
              <img
                src={man2}
                alt="man_image"
                className="absolute bottom-0 left-[50%] -translate-x-[50%] rounded-[80px]"
              />
            </div>
          </div>
        </div>
        <div className="right relative flex flex-col items-center justify-center lg:items-start xl:max-w-[90%] 2xl:max-w-[80%]">
          <h2 className="relative mb-3 text-lg font-[600] text-[#6077f2]">
            About Me
            <div className="absolute -left-[20px] -top-[20px] h-full w-full">
              <img src={Spark} alt="spark image" className="h-[30px]" />
            </div>
          </h2>
          <h3 className="mb-3 text-center text-2xl font-[900] leading-normal text-gray-800 sm:text-start md:text-2xl lg:text-3xl xl:text-4xl">
            {/* {"Why You Hire me Your Next Project?"} */}
            Ahsan DevHub: Turning Coffee into Code Since 2021
          </h3>
          <p className="text-justify text-sm text-gray-600 sm:text-base lg:text-start lg:text-sm xl:text-base">
            <span className="font-semibold">Hey there, </span>
            I&apos;m Ahsan Habib, here to make your digital dreams come true
            faster than you can say &quot;How you doin&apos;?&quot; With the
            magical MERN stack in my toolkit, I&apos;ll whip up web wonders that
            even Joey would be impressed by. Whether it&apos;s jazzing up
            frontends or diving deep into backend mysteries, I&apos;ve got the
            skills to make your project shine brighter than Ross&apos; teeth. So
            grab your Central Perk mug, let&apos;s brew up some coding goodness,
            and turn your ideas into digital episodes that&apos;ll leave
            everyone laughing like Chandler Bing!
          </p>
          <ul className="skills mt-5 flex flex-col gap-y-2 xl:mb-5 xl:mt-8">
            <SkillList
              title="Frontend (React + Tailwind)"
              percentage="w-[95%]"
            />
            <SkillList title="Backend (Node + Express)" percentage="w-[80%]" />
            <SkillList title="Database (MongoDB)" percentage="w-[90%]" />
            <SkillList title="Responsive Design" percentage="w-[85%]" />
          </ul>
          <div
            className="download_button pt-6 lg:w-full xl:pt-8"
            style={{
              backgroundImage: `url(${DottedArrow})`,
              backgroundPosition: "145px",
              backgroundSize: "100px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <button className="rounded bg-[#6077f2] px-3 py-2 font-[600] text-white hover:bg-[#4e69f4]">
              Download CV
            </button>
          </div>
        </div>
        <div className="absolute -left-[60px] top-[100px]">
          <img
            src={Circles}
            alt="circles bg"
            className="h-[150px] rotate-[111deg]"
          />
        </div>
        <div className="absolute right-[130px] top-[150px]">
          {/* <img
            src={Circles}
            alt="circles bg"
            className="h-[150px] rotate-[140deg]"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
