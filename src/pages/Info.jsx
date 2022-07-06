import React from "react";
import Header from "../components/Header";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
const Info = () => {
  return (
    <div className="">
      <Header />
      <div className="grid md:grid-cols-2 p-4">
        <div className="hidden md:block">
          <HeroText />
        </div>
        <div className="right grid resume p-4  md:relative md:top-20 ">
          <div className="flex justify-between">
            <p className="text-xl text-gray-100">Moses Fawole</p>
            <span>
              <FaDownload />
            </span>
          </div>
          <div className="desc">
            I’m a frontend software developer, passionate about solving problems
            with code and transforming ideas from pixels to scalable products. I
            create usable applications with user experience as a top priority
            using various web tools, languages and technology.
          </div>
          <div className="section">
            <div className="title">
              <p>Core Technologies</p>
            </div>
            <p>
              HTML/CSS/SASS, Javascript [ES6+], React JS, Gatsby JS, Next JS,
              Vue JS, CSS-in-JS, Typescript, GraphQL, Redux, Firebase.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="buttons  p-4 flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/projects">
              Explore <FaArrowRight className="ml-2 items-center" />
            </Link>
          </button>
        </div>
        <div className="buttons  p-4 flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/projects">
              Explore <FaArrowRight className="ml-2 items-center" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
