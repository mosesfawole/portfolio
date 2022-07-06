import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
