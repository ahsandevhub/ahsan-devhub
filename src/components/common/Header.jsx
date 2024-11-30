/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavLink = (props) => {
    return (
      <li>
        <a
          href={props.href}
          className={`transition-all hover:text-[#6074ed] lg:text-gray-800 ${isNavbarOpen && innerWidth <= 1023 ? "text-lg text-white hover:text-[#6074ed]" : ""}`}
        >
          {props.title}
        </a>
      </li>
    );
  };

  const handleNavMenuClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-3 py-4 sm:px-[26px] lg:py-[26px]">
        <div className="logo flex items-center gap-2 text-xl">
          <FaCode className="text-2xl" />
          <span className="font-[600]">Ahsan</span>
          <span className="font-[800] text-[#6277ee]">DevHub</span>
        </div>
        <div className="lg:hidden">
          <div className="button" onClick={() => handleNavMenuClick()}>
            <MdOutlineMenuOpen className="text-3xl" />
          </div>
        </div>
        <ul
          className={`nav font-[600] lg:flex lg:gap-x-8 ${isNavbarOpen && innerWidth <= 1023 ? "fixed right-0 top-[62px] h-[calc(100vh-62px)] w-full flex-col gap-y-5 border-t bg-[#1e293bee] p-3 pr-5 pt-10 text-center shadow sm:w-[300px] sm:border-l sm:pt-3 sm:text-right" : "hidden"}`}
        >
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="/#about" />
          <NavLink title="Services" href="/#services" />
          <NavLink title="My Skills" href="/#skills" />
          <NavLink title="Portfolio" href="/#portfolio" />
          <NavLink title="Contact" href="/#contact" />
        </ul>
        <div className="hidden lg:block">
          <a
            href="#portfolio"
            className="rounded bg-[#6277ee] px-3 py-2 font-[600] text-white transition-all hover:bg-[#4e66eb]"
          >
            View Project
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
