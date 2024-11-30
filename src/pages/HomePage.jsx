import AboutMe from "../components/homepage/AboutMe";
import Contact from "../components/homepage/Contact";
import HeroArea from "../components/homepage/HeroArea";
import MyServices from "../components/homepage/MyServices";
import MySkills from "../components/homepage/MySkills";
import Portfolio from "../components/homepage/Portfolio";

const HomePage = () => {
  return (
    <main>
      <HeroArea />
      <AboutMe />
      <MyServices />
      <MySkills />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default HomePage;
