import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
