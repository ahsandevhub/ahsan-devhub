/* eslint-disable react/prop-types */
import { useState } from "react";
import StudentPortal from "../../assets/portfolio image/Student portal dashboard.png";
import AhsanDevhubAdmin from "../../assets/portfolio image/ahsandevhub admin.jpg";
import ChatGptClone from "../../assets/portfolio image/chatgpt clone.jpg";
import MWallet from "../../assets/portfolio image/mWallet.jpg";
import FootwearWebsite from "../../assets/portfolio image/nike footwear website.jpg";
import NotyGuideService from "../../assets/portfolio image/noty guide service.jpg";
import PortfolioProject from "../../assets/portfolio image/portfolio-project.jpg";
import QuarterRealState from "../../assets/portfolio image/quarter real state2.jpg";
import RoboGearAdmin from "../../assets/portfolio image/robogear admin.jpg";
import RoboGearBd from "../../assets/portfolio image/robogear bd.jpg";
import SimplePortfolio from "../../assets/portfolio image/simple portfolio.jpg";
import TicTacToe from "../../assets/portfolio image/tic tac toe.jpg";
import TravelPointAgency from "../../assets/portfolio image/travelpoint agency.jpg";
import Spark from "../../assets/spark.png";

const Portfolio = () => {
  const [category, setCategory] = useState("My Favourite");

  const PortfolioCard = (props) => {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card h-full w-full text-white hover:underline"
      >
        <img
          src={props.src}
          alt={props.title}
          className="rounded-lg transition-all duration-300 hover:scale-[103%] hover:shadow-lg"
        />
        <p className="mt-3 text-center text-base font-[500] xl:text-lg">
          {props.title}
        </p>
      </a>
    );
  };

  const CategoryList = (props) => {
    return (
      <li
        className={`cursor-pointer transition-all hover:text-[#6074ed] ${props.title === category ? "text-[#6074ed] underline underline-offset-4" : "text-white"}`}
        onClick={() => setCategory(props.title)}
      >
        {props.title}
      </li>
    );
  };

  return (
    <div className="bg-[#101431]" id="portfolio">
      <div className="container relative mx-auto flex flex-col items-center px-3 py-[50px] sm:px-[26px] lg:py-[80px] xl:py-[125px]">
        <h2 className="relative mb-2 text-lg font-[600] text-[#6077f2]">
          Portfolio
          <div className="absolute -left-[20px] -top-[20px] h-full w-full">
            <img src={Spark} alt="spark image" className="h-[30px]" />
          </div>
        </h2>
        <h3 className="mb-3 text-center text-3xl font-[600] capitalize text-white">
          My best work
        </h3>
        <p className="text-center font-[500] text-gray-50">
          Each project&apos;s a star in my digital galaxy! 🌟
        </p>
        <ul className="nav my-8 flex w-[90%] items-center justify-center gap-5 overflow-y-auto text-nowrap px-5 text-base font-[500] text-white sm:w-full xl:text-lg xl:font-[600]">
          <CategoryList title="My Favourite" />
          {/* <CategoryList title="Frontend" /> */}
          <CategoryList title="Full Stack" />
          <CategoryList title="E-commerce" />
          <CategoryList title="Dashboard" />
          <CategoryList title="Portfolio Website" />
          <CategoryList title="Others" />
        </ul>
        {category === "My Favourite" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="Online Robotics Shop"
              src={RoboGearBd}
              href="/portfolio-details/robogear-bd"
            />
            <PortfolioCard
              title="E-commerce Admin Panel"
              src={RoboGearAdmin}
              href="/portfolio-details/robogear-bd-admin"
            />
            <PortfolioCard
              title="Quarter Real State"
              src={QuarterRealState}
              href="/portfolio-details/quarter-real-state"
            />
            <PortfolioCard
              title="Travel Point Agency"
              src={TravelPointAgency}
              href="/portfolio-details/travel-point-agency"
            />
            <PortfolioCard
              title="Nike Footwear"
              src={FootwearWebsite}
              href="/portfolio-details/nike-footwear"
            />
            <PortfolioCard
              title="Noty Guide Service"
              src={NotyGuideService}
              href="/portfolio-details/noty-guide-service"
            />
          </div>
        )}
        {category === "Frontend" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="Travel Point Agency"
              src={TravelPointAgency}
              href="/portfolio-details/travel-point-agency"
            />
            <PortfolioCard
              title="Quarter Real State"
              src={QuarterRealState}
              href="/portfolio-details/quarter-real-state"
            />
            <PortfolioCard
              title="Nike Footwear"
              src={FootwearWebsite}
              href="/portfolio-details/nike-footwear"
            />
            <PortfolioCard
              title="Noty Guide Service"
              src={NotyGuideService}
              href="/portfolio-details/noty-guide-service"
            />
          </div>
        )}
        {category === "Full Stack" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="Online Robotics Shop"
              src={RoboGearBd}
              href="/portfolio-details/robogear-bd"
            />
            <PortfolioCard
              title="E-commerce Admin Panel"
              src={RoboGearAdmin}
              href="/portfolio-details/robogear-bd-admin"
            />
            <PortfolioCard
              title="Portfolio Admin Panel"
              src={AhsanDevhubAdmin}
              href="/portfolio-details/ahsandevhub-admin"
            />
          </div>
        )}
        {category === "E-commerce" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="Online Robotics Shop"
              src={RoboGearBd}
              href="/portfolio-details/robogear-bd"
            />
            <PortfolioCard
              title="Nike Footwear"
              src={FootwearWebsite}
              href="/portfolio-details/nike-footwear"
            />
            <PortfolioCard
              title="E-commerce Admin Panel"
              src={RoboGearAdmin}
              href="/portfolio-details/robogear-bd-admin"
            />
          </div>
        )}
        {category === "Dashboard" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="E-commerce Admin Panel"
              src={RoboGearAdmin}
              href="/portfolio-details/robogear-bd-admin"
            />
            <PortfolioCard
              title="Portfolio Admin Panel"
              src={AhsanDevhubAdmin}
              href="/portfolio-details/ahsandevhub-admin"
            />
            <PortfolioCard
              title="Student Portal Dashboard"
              src={StudentPortal}
              href="/portfolio-details/student-portal"
            />
          </div>
        )}
        {category === "Portfolio Website" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="Rose Portfolio"
              src={PortfolioProject}
              href="/portfolio-details/portfolio-rose"
            />
            <PortfolioCard
              title="Simple Portfolio"
              src={SimplePortfolio}
              href="/portfolio-details/simple-portfolio"
            />
          </div>
        )}
        {category === "Others" && (
          <div className="cards_container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <PortfolioCard
              title="ChatGPT Clone"
              src={ChatGptClone}
              href="/portfolio-details/chatgpt-clone"
            />
            <PortfolioCard
              title="mWallet MFS"
              src={MWallet}
              href="/portfolio-details/mwallet-mfs"
            />
            <PortfolioCard
              title="Tic-Tac-Toe Game"
              src={TicTacToe}
              href="/portfolio-details/tic-tac-toe-game"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
