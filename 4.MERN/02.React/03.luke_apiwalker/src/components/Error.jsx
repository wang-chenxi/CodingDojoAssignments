import React from "react";

const Error = () => {
  return (
    <div>
      <h3 className="text-danger">
        These aren't the droids you're looking for
      </h3>
      <img src={"/image/obi-wan.0.jpg"} style={{ maxWidth: "500px" }}></img>
    </div>
  );
};

export default Error;
