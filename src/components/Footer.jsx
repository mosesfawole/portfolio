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
        <div className="flex items-center text-[#D0D6F9] hover:text-white  gap-4 ">
          <a
            rel="noreferrer"
            href="https://github.com/mosesfawole"
            target="_blank"
            className="flex items-center gap-4"
          >
            <FaGithub className="" /> Github
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/Pharwolehh"
            target="_blank"
            noreferrer="true"
            className="flex items-center gap-4"
          >
            <FaTwitter className="text-[#D0D6F9] hover:text-white" /> Twitter
          </a>
          <a
            rel="noreferrer"
            href="mailto:pharwoleh.dev@gmail.com"
            target="_blank"
            noreferrer="true"
            className=" flex items-center gap-4"
          >
            <FaEnvelope className="text-[#D0D6F9] hover:text-white" /> Email
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
