import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import man from "../../assets/man.png";
import Wireframe from "../../assets/wireframe.svg";

const HeroArea = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial size

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <div
      className="relative bg-[#090b1a]"
      style={{
        backgroundImage: `url('${Wireframe}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="container mx-auto flex flex-col px-3 py-[50px] text-gray-50 sm:px-[26px] lg:py-[80px] xl:py-[125px]"
        style={{
          backgroundImage: isSmallScreen ? "none" : `url('${man}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center sm:text-start lg:max-w-[60%] xl:max-w-[50%]">
          <div className="mb-10 lg:mb-[70px]">
            <h2 className="mb-3 text-xl font-[600]">
              Hi, I&apos;m <span className="text-[#6077f2]">Ahsan Habib</span>
            </h2>
            <h1 className="mb-6 text-5xl font-[800] leading-snug sm:text-6xl sm:leading-[75px]">
              <span className="text-[#6077f2]">MERN</span> Stack <br /> Web
              Developer
            </h1>
            <p className="mb-10 font-[500] text-gray-300">
              I sprinkle React magic for front-end flair while wrangling
              Node.js, Express.js, and MongoDB behind the scenes like a digital
              cowboy. My mission? To craft web experiences so engaging,
              they&apos;ll make unicorns jealous! So buckle up, strap in, and
              get ready for a code journey that&apos;s out of this world! 🚀✨
            </p>
            <div className="buttons flex items-center justify-center gap-5 sm:justify-start">
              <a
                className="flex cursor-pointer items-center gap-3 rounded bg-[#6077f2] px-5 py-2 transition-all hover:gap-4 hover:bg-[#4e69f4]"
                href="https://www.upwork.com/freelancers/~012660feade0821ae8?mp_source=share"
                target="_blank"
              >
                Hire Me <FaArrowRightLong />
              </a>
              <button
                className="flex items-center gap-2 rounded px-3 py-2 transition-all hover:bg-[#6077f2]"
                onClick={() => setVideoPopup(true)}
              >
                <FaPlayCircle className="text-2xl" /> Watch Video
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:justify-start sm:gap-5">
            <div className="item flex w-[120px] flex-col items-center gap-2 lg:w-[150px]">
              <div className="title text-xl font-[600] lg:text-2xl">02+</div>
              <div className="tag text-xs font-[300] text-gray-200 sm:text-sm lg:text-base">
                Years of Experience
              </div>
            </div>
            <div className="item flex w-[120px] flex-col items-center gap-2 border-l-2 ps-3 sm:ps-5 lg:w-[150px]">
              <div className="title text-xl font-[600] lg:text-2xl">12+</div>
              <div className="tag text-xs font-[300] text-gray-200 sm:text-sm lg:text-base">
                Happy Clients
              </div>
            </div>
            <div className="item flex w-[120px] flex-col items-center gap-2 border-l-2 ps-3 sm:ps-5 lg:w-[150px]">
              <div className="title text-xl font-[600] lg:text-2xl">20+</div>
              <div className="tag text-xs font-[300] text-gray-200 sm:text-sm lg:text-base">
                Projects Done
              </div>
            </div>
          </div>
        </div>
      </div>
      {videoPopup && (
        <div
          className="video_popup_overlay fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#000000cc]"
          onClick={() => setVideoPopup(false)}
        >
          <div className="video_container relative aspect-video w-[96%] max-w-[800px] overflow-hidden rounded border border-gray-500 bg-white sm:w-[90%] sm:rounded-lg">
            <div className="video h-full w-full">
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/w9Mfh5IX12Y"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -top-[60px] left-[50%] -translate-x-[50%]">
              <button
                type="button"
                className="rounded-full bg-[#cccccc55] p-2 transition-all hover:rotate-90"
                onClick={() => setVideoPopup(false)}
              >
                <IoCloseSharp className="text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroArea;
