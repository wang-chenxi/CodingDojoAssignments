import React from "react";
import PropTypes from "prop-types";

const PersonCard2 = (props) => {
  return (
    <div className="card bg-dark text-light mb-5 flex-1">
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
};

export default PersonCard2;
