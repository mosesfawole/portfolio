import {
  FaEnvelope,
  FaGithub,
  FaRegPaperPlane,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex items-center  justify-center">
        <div className="flex items-center  gap-4 ">
          <a
            rel="noreferrer"
            href="https://github.com/mosesfawole"
            target="_blank"
            className="flex items-center gap-4"
          >
            <FaGithub className="" /> Github ↗
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/Pharwolehh"
            target="_blank"
            noreferrer="true"
            className="flex items-center gap-4"
          >
            <FaTwitter className="" /> Twitter ↗
          </a>
          <a
            rel="noreferrer"
            href="mailto:pharwoleh.dev@gmail.com"
            target="_blank"
            noreferrer="true"
            className=" flex items-center gap-4"
          >
            <FaEnvelope className="" /> Email ↗
          </a>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden">
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
