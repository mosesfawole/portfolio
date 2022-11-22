import { FaDownload } from "react-icons/fa";
import resume from "../file/resume.pdf";
const Resume = () => {
  return (
    <div className="  ">
      <div className=" ">
        <p className=" ">Moses Fawole</p>

        <span className="">
          <a
            className=""
            title="Click to download resume"
            href={resume}
            download="mosesfawole"
          >
            <span className="">Download</span> <FaDownload />
          </a>
        </span>
      </div>
      <div className="">
        <p>Frontend Developer</p>
      </div>
      <div className=" ">
        I'm a frontend web devloper with experience using web technology to
        build all aspects of the user experience and user interface for
        client-facing landing pages. <br />I spend most of my time writing
        functional,scalable and efficient code.
      </div>
      <div className="">
        <div className=" ">
          <p className="">Core Technologies :</p>
          <p className="">
            HTML/CSS, Javascript , React JS, Tailwind CSS, Next JS, Bootstrap
            Node js, Express Js, Git , Github, Redux, MongoDb
          </p>
        </div>
        <div className="">
          <p className="">Familiar with :</p>
          <p className="">
            Vue js, Graphql, Sanity, unit testing , Material-Ui, Framer motion,
            React-Native
          </p>
        </div>
        <hr />
        <div className="">
          <p>
            I'm currently open to Internship/Junior roles, you can reach out to
            me through{" "}
            <a
              className=""
              href="mailto:pharwoleh.dev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              mail{" "}
            </a>
            or send me a{" "}
            <a
              className=""
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
