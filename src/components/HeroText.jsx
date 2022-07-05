import Footer from "./Footer";

const HeroText = () => {
  return (
    <div className="hero-text p-8 flex flex-col md:fixed md:top-40">
      <div className=" font-mono">
        <h1 className="mb-">Hi, I'm Moses Fawole!</h1>
        <h2 className=" mt-10 ">
          I'm a <span className="text-gray-200">Frontend Web Developer</span>, i
          build with the{" "}
          <span className="text-gray-200">MERN Stack (FE Heavy). </span>
        </h2>
        <p className="mb-10 mt-2 ">
          I write {""}
          <span className="text-gray-200">
            interactive experiences and responsive web applications
          </span>{" "}
          using modern web technologies. <br /> I'm{" "}
          <span className="text-gray-200">learning/improving on </span>the MERN
          Stack.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default HeroText;
