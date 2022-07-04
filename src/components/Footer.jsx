import { FaGithub, FaTwitter } from "react-icons/fa";
import Avi from "../image/Banner.jpg";
const Footer = () => {
  return (
    <div className="text-white flex items-center text-sm space-x-4 ">
      <div className="">
        <img src={Avi} alt="" className="avatar" />
      </div>
      <a
        href="github.com/mosesfawole"
        target="_blank"
        className="flex items-center "
      >
        <FaGithub className=" md:m-2 mr-2" /> Github ↗
      </a>
      <a
        href="twitter.com/pharwoleh"
        target="_blank"
        noreferrer="true"
        className="flex items-center"
      >
        <FaTwitter className="md:m-2 mr-2" /> Twitter ↗
      </a>
    </div>
  );
};

export default Footer;
