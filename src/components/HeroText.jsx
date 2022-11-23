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
    <div className="flex md:flex-row-reverse flex-col gap-8  items-center p-4">
      <div className="flex justify-center items-center">
        <img
          loading="lazy"
          src={Avi}
          alt=""
          className="w-1/2 h-1/2 rounded-xl"
        />
      </div>
      <div className="">
        <h1 className="">Hi, I'm Moses Fawole</h1>
        <h2 className=" ">
          I'm a <span className=" ">Frontend Developer</span>, and sometimes
          work with the <span className="">backend </span> using
          <span className=""> the MERN Stack. </span>
        </h2>
        <p className="">
          I create <span className="">interactive experiences</span> and{" "}
          <span className="">responsive</span> web applications using modern
          technology.
          <br /> I'm <span className="">currently learning </span>
          the MERN Stack.
          <br />
        </p>
      </div>
    </div>
  );
};

export default HeroText;
