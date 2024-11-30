/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPlayCircle,
  FaReact,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { IoCloseSharp, IoLogoJavascript } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useParams } from "react-router-dom";
import BrowserBar from "../assets/browser bar.svg";
import HeroSecondary from "../components/common/HeroSecondary";

const PortfolioDetailsPage = () => {
  const { route } = useParams();
  const [portfolioDetails, setPortfolioDetails] = useState({});
  const [videoPopup, setVideoPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/portfolio/portfolio-details/${route}`,
        );
        setPortfolioDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching mail:", error);
      }
    };

    fetchData();
  }, [route]);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  return (
    <main>
      <HeroSecondary
        title={portfolioDetails?.title}
        tagline={portfolioDetails?.tagline}
      />
      <div className="bg-White" id="about">
        <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px]">
          <div className="showcase grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-[80px]">
            <div className="full_image flex w-full flex-col items-center gap-5">
              <div className="browser w-full rounded-lg border">
                <img src={BrowserBar} alt="browserbar" />
                <div className="image h-[465px] cursor-pointer overflow-hidden bg-gray-50">
                  <a
                    href={`${import.meta.env.VITE_SERVER_URI}/${portfolioDetails?.image}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${import.meta.env.VITE_SERVER_URI}/${portfolioDetails?.image}`}
                      alt={portfolioDetails?.image}
                      className="img-fluid translate-y-0 transform transition duration-[8s] ease-in-out hover:translate-y-[calc(-100%+465px)]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_summary flex flex-col items-center gap-5">
              <div className="details flex w-full flex-col items-start gap-4 text-gray-800">
                <div className="heading w-full border-b pb-2">
                  <h1 className="text-3xl font-bold">
                    {portfolioDetails?.title}
                  </h1>
                  <h2 className="text-gray-700">{portfolioDetails?.tagline}</h2>
                </div>
                <div className="tech">
                  <h3 className="mb-2 font-bold">Technology used:</h3>
                  <div className="icons flex items-center gap-2">
                    {portfolioDetails && portfolioDetails.technology ? (
                      portfolioDetails.technologies.map((technology, index) => (
                        <div
                          key={index}
                          className="icon flex flex-wrap items-center justify-center gap-2 rounded-lg border bg-white p-2"
                        >
                          {technology === "HTML" ? (
                            <FaHtml5 className="text-[#E34C26]" />
                          ) : technology === "CSS" ? (
                            <FaCss3Alt className="text-[#264DE4]" />
                          ) : technology === "JavaScript" ? (
                            <IoLogoJavascript className="text-[#F7DF1E]" />
                          ) : technology === "Tailwind" ? (
                            <SiTailwindcss className="text-[#38B2AC]" />
                          ) : technology === "React" ? (
                            <FaReact className="text-[#61DAFB]" />
                          ) : technology === "Node.js" ? (
                            <FaNodeJs className="text-[#339933]" />
                          ) : technology === "Express" ? (
                            <SiExpress className="text-[#000000]" />
                          ) : technology === "MongoDB" ? (
                            <SiMongodb className="text-[#47A248]" />
                          ) : (
                            <FaCode className="text-[#6B7280]" />
                          )}
                          <span className="text-sm font-semibold">
                            {technology}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                </div>
                <ul className="features">
                  <h3 className="mb-1 font-bold">
                    Features and Functionality:
                  </h3>
                  {portfolioDetails && portfolioDetails?.features ? (
                    portfolioDetails.features.map((data, index) => (
                      <li className="ms-5 flex items-center gap-2" key={index}>
                        <IoMdDoneAll className="text-[#6077f2]" />
                        <p className="text-gray-800">{data}</p>
                      </li>
                    ))
                  ) : (
                    <div>Loading...</div>
                  )}
                </ul>
                <div className="button flex items-center gap-3">
                  {portfolioDetails?.youtube && (
                    <button
                      className="flex cursor-pointer items-center gap-2 rounded bg-[#FF0000] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                      onClick={() => setVideoPopup(true)}
                    >
                      <FaPlayCircle className="text-lg" /> Play Video
                    </button>
                  )}
                  <a
                    className="flex cursor-pointer items-center gap-2 rounded bg-[#6077f2] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                    href={portfolioDetails?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiPagesLine className="text-lg" /> Live Preview
                  </a>
                  <a
                    className="flex cursor-pointer items-center gap-2 rounded bg-[#181717] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                    href={portfolioDetails?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-lg" /> View Code
                  </a>
                </div>
                <p className="text-sm italic text-gray-600">
                  *To see full page overview, please hover on the left image!
                </p>
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
                src={`https://www.youtube.com/embed/${portfolioDetails?.youtube ? portfolioDetails?.youtube : "w9Mfh5IX12Y"}`}
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
    </main>
  );
};

export default PortfolioDetailsPage;
