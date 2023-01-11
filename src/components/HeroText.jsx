import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Avi from "../image/Banner.avif";
import { Link } from "react-router-dom";
const HeroText = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      when: "beforeChildren",
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex md:flex-row flex-col gap-8   items-center p-4">
      <div className="">
        {/*   <div className="">
          <img loading="lazy" src={Avi} alt="" className="w-1/ rounded-xl" />
        </div> */}
        <div className="text-center md:text-left ">
          <h1 className="text-xl font-barlow  md:text-4xl text-[#D0D6F9]">
            Hi, I'm Moses Fawole
          </h1>
          <h2 className="font-bellefair  text-[#D0D6F9] ">
            I'm a Frontend Developer, and sometimes work with the backend using
            the MERN Stack. I create interactive experiences and responsive web
            applications using modern technology. I'm currently learning the
            MERN Stack.
          </h2>
        </div>
      </div>
      <div className="flex ">
        <Link to="/projects">
          <button className="animate-pulse transition-all delay-150 ease-in-out bg-white w-36 h-36 md:w-64 md:h-64 rounded-full outline  hover:outline-[40px] outline-[#ffffff19]    ">
            <p className="font-bellefair uppercase text-[#0B0D17] text-xl md:text-3xl leading-5">
              Explore
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
