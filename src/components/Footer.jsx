import {
  FaEnvelope,
  FaGithub,
  FaRegPaperPlane,
  FaTwitter,
} from "react-icons/fa";
import Avi from "../image/Banner.avif";
const Footer = () => {
  return (
    <>
      <div className=" ">
        <div className="">
          <a
            rel="noreferrer"
            href="https://github.com/mosesfawole"
            target="_blank"
            className=""
          >
            <FaGithub className="" /> Github ↗
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/Pharwolehh"
            target="_blank"
            noreferrer="true"
            className=""
          >
            <FaTwitter className="" /> Twitter ↗
          </a>
          <a
            rel="noreferrer"
            href="mailto:pharwoleh.dev@gmail.com"
            target="_blank"
            noreferrer="true"
            className=" "
          >
            <FaEnvelope className="" /> Email ↗
          </a>
        </div>
        <div className="">
          <p className="  ">
            Inspired by{" "}
            <a
              rel="noreferrer"
              className=""
              href="https://kadet.dev/"
              target="_blank"
            >
              Kadet{""}
              <span className="">
                {" "}
                <FaRegPaperPlane />
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* mobile view */}
      <div className="">
        <div className="">
          <a
            rel="noreferrer"
            href="https://github.com/mosesfawole"
            target="_blank"
            className=" "
          >
            <FaGithub className="" />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/Pharwolehh"
            target="_blank"
            noreferrer="true"
            className=""
          >
            <FaTwitter className="" />
          </a>
          <a
            rel="noreferrer"
            href="mailto:pharwoleh.dev@gmail.com"
            target="_blank"
            noreferrer="true"
            className=" "
          >
            <FaEnvelope className="" />
          </a>
        </div>
        <div className=" ">
          <p className="">
            Inspired by{" "}
            <a
              rel="noreferrer"
              className=""
              href="https://kadet.dev/"
              target="_blank"
            >
              Kadet{""}
              <span className="">
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
