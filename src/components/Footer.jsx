import { FaGithub, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avi from "../image/Banner.jpg";
const Footer = () => {
  return (
    <>
      <div className="hidden text-white md:flex items-center text-sm space-x-4 ">
        <div className="">
          <img src={Avi} alt="" className="avatar" />
        </div>
        <a
          rel="noreferrer"
          href="https://github.com/mosesfawole"
          target="_blank"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaGithub className=" md:m-2 mr-2" /> Github ↗
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/Pharwolehh"
          target="_blank"
          noreferrer="true"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaTwitter className="md:m-2 mr-2" /> Twitter
        </a>
        <a
          rel="noreferrer"
          href="mailto:pharwoleh.dev@gmail.com"
          target="_blank"
          noreferrer="true"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaMailchimp className="md:m-2 mr-2" /> Email
        </a>
      </div>
      <div className="md:hidden text-white flex items-center justify-evenly text-2xl ">
        <a
          rel="noreferrer"
          href="https://github.com/mosesfawole"
          target="_blank"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaGithub className=" md:m-2 mr-2" />
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/Pharwolehh"
          target="_blank"
          noreferrer="true"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaTwitter className="md:m-2 mr-2" />
        </a>
        <a
          rel="noreferrer"
          href="mailto:pharwoleh.dev@gmail.com"
          target="_blank"
          noreferrer="true"
          className="flex items-center md:opacity-75 md:hover:opacity-100 "
        >
          <FaMailchimp className="md:m-2 mr-2" />
        </a>
      </div>
      <div className="text-center mt-4 md:text-start">
        <p className=" ">
          Inspired by{" "}
          <a
            rel="noreferrer"
            className=" uppercase text-xs text-gray-100 font-semibold"
            href="https://kadet.dev/"
            target="_blank"
          >
            Kadet ↗
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
