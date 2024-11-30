/* eslint-disable react/prop-types */
import NodeBg from "../../assets/futuristic node bg3.jpg";

const HeroSecondary = (props) => {
  return (
    <div
      className="bg-[#101431]"
      id="about"
      style={{
        backgroundImage: `url('${NodeBg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-2 px-3 py-[50px] text-white sm:px-[26px] lg:py-[80px] xl:py-[100px]">
        <h1 className="title text-5xl font-bold capitalize text-gray-200">
          {props.title}
        </h1>
        <h2 className="text-2xl font-semibold capitalize text-slate-500">
          {props.tagline}
        </h2>
      </div>
    </div>
  );
};

export default HeroSecondary;
