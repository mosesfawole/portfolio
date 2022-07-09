import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-white  text-center flex flex-col  justify-center items-center ">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <span className="flex  ">
        Back to
        <Link to="/" className="ml-2 underline">
          {" "}
          homepage ...
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
