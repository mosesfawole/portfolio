import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Loader } from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
function App() {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <>
      <div
        className={
          currentPage === "none"
            ? ""
            : "bg-mobile sm:bg-tablet md:bg-desktop bg-center bg-cover min-h-screen flex flex-col justify-around"
        }
      >
        {/* <Loader /> */}
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Projects />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
