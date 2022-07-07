import { motion } from "framer-motion";
const Loader = () => {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 0.5,
        },
        y: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
  };
  return (
    <>
      <div className="bg-black h-full fixed flex justify-center  w-full z-10  p-10">
        <motion.div
          variants={loaderVariants}
          animate="animationOne"
          className=" uppercase text-white w-2 h-2 fixed top-80 flex items-center  rounded-full "
        >
          Loading...
        </motion.div>
      </div>
    </>
  );
};

export default Loader;
