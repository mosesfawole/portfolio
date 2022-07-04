import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white flex items-center space-x-4 p-4">
      <a
        href="github.com/mosesfawole"
        target="_blank"
        className="flex items-center "
      >
        <FaGithub className="m-2" /> Github
      </a>
      <a
        href="twitter.com/pharwoleh"
        target="_blank"
        noreferrer="true"
        className="flex items-center"
      >
        <FaTwitter className="m-2" /> Twitter
      </a>
    </div>
  );
};

export default Footer;
