import React from "react";
import Loading from "../image/working-on.gif";
const Construction = () => {
  return (
    <div className="flex justify-center items-center bg-black h-[100vh]">
      <div className="text-white font-barlow">
        <h1 className="text-lg uppercase ">information</h1>
        <p className="">Site under construction</p>
        <p className="text-xs">Redirecting to page in few seconds...</p>
        <img className="" src={Loading} alt="under construction" />
      </div>
    </div>
  );
};

export default Construction;
