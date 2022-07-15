import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <div className="wrapper ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="md:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
