import { FaDownload } from "react-icons/fa";
import resume from "../file/resume.pdf";
const Resume = () => {
  return (
    <div className="right grid resume p-4 md:py-10 md:px-6 ">
      <div className="flex justify-between ">
        <p className="text-2xl text-white font-semibold ">Moses Fawole</p>

        <span className="text-white flex items-center space-x-4">
          <a
            className="flex "
            title="Click to download resume"
            href={resume}
            download="mosesfawole"
          >
            <span className="text-sm mr-2">Download</span> <FaDownload />
          </a>
        </span>
      </div>
      <div className="text-gray-300 font-semibold mb-4">
        <p>Frontend Developer</p>
      </div>
      <div className="desc text-gray-400 text-sm mb-4 ">
        I'm a frontend web devloper, building functional,scalable and efficient
        code for the best user experiences, Passionate front-end web developer
        with experience using web technology to build all aspects of the user
        experience and user interface for client-facing landing pages.
      </div>
      <div className="section">
        <div className="title mb-4">
          <p className="text-white font-semibold mb-2">Core Technologies :</p>
          <p className=" text-xs text-gray-400 uppercase  ">
            HTML/CSS, Javascript , React JS, Tailwind CSS, Next JS, Bootstrap
            Node js, Git , Github
          </p>
        </div>
        <div className="title mb-2">
          <p className="text-white font-semibold mb-4">Familiar with :</p>
          <p className=" text-xs text-gray-400 uppercase">
            MongoDb, Express Js, Vue js, Graphql, Sanity, unit testing ,
            Material-Ui, Redux, Framer motion, React-Native
          </p>
        </div>
        <hr />
        <div className="bottom text-sm mt-2 text-gray-400">
          <p>
            I'm currently open to Internship/Junior roles, you can reach out to
            me through{" "}
            <a
              className="text-white underline font-semibold"
              href="mailto:pharwoleh.dev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              mail{" "}
            </a>
            or send me a{" "}
            <a
              className="text-white underline font-semibold"
              href="https://twitter.com/pharwoleh"
              rel="noreferrer"
              target="_blank"
            >
              dm
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
