import { motion } from "framer-motion";
import Header from "./Header";
const Contact = () => {
  return (
    <div className="">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid gap-4 md:grid-cols-2 overflow-hidden "
      >
        <div className="right h-1/2  "></div>
      </motion.div>
    </div>
  );
};

export default Contact;
