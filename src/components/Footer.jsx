import {
  FaEnvelope,
  FaGithub,
  FaRegPaperPlane,
  FaTwitter,
} from "react-icons/fa";
import Avi from "../image/Banner.jpg";
const Footer = () => {
  return (
    <>
      <div className="hidden md:p-8  text-white md:flex   ">
        <div className="">
          <img src={Avi} alt="" className="avatar" />
        </div>
        <div className="flex foot items-center justify-center text-sm space-x-4">
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
            <FaTwitter className="md:m-2 mr-2" /> Twitter ↗
          </a>
          <a
            rel="noreferrer"
            href="mailto:pharwoleh.dev@gmail.com"
            target="_blank"
            noreferrer="true"
            className="flex items-center md:opacity-75 hover:opacity-100 "
          >
            <FaEnvelope className="md:m-2 mr-2" /> Email ↗
          </a>
        </div>
        <div className="text-center flex text-sm  text-gray-400  md:text-start ">
          <p className=" p-2 flex items-center ">
            Inspired by{" "}
            <a
              rel="noreferrer"
              className=" text-xs flex  items- ml-1 text-gray-300 font-semibold hover:text-white"
              href="https://kadet.dev/"
              target="_blank"
            >
              Kadet{""}
              <span className="flex ml-1">
                {" "}
                <FaRegPaperPlane />
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden  text-white flex flex-col items-center  text-2xl   ">
        <div className="flex-row flex  space-x-4 mb-2 mt-4">
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
            <FaEnvelope className="md:m-2 mr-2" />
          </a>
        </div>
        <div className="text-center flex text-sm  text-gray-400  md:text-start ">
          <p className=" p-2 flex items-center ">
            Inspired by{" "}
            <a
              rel="noreferrer"
              className=" text-xs flex  items- ml-1 text-gray-300 font-semibold hover:text-white"
              href="https://kadet.dev/"
              target="_blank"
            >
              Kadet{""}
              <span className="flex ml-1">
                {" "}
                <FaRegPaperPlane />
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
