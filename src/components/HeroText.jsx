import Footer from "./Footer";

const HeroText = () => {
  return (
    <div className="hero-text p-8 flex flex-col md:fixed">
      <h1 className="mb-">Hi, I'm Moses Fawole!</h1>
      <h2 className=" mt-10">
        I'm a Frontend Web Developer, i sometimes create with the MERN Stack (FE
        Heavy).{" "}
      </h2>
      <p className="mb-10 mt-2">
        I write interactive experiences and responsive web applications using
        modern web technologies. I'm currently building with the MERN Stack.{" "}
      </p>
      <Footer />
    </div>
  );
};

export default HeroText;
