import React, { useState } from "react";

const Tabs = () => {
  const content = ["Hello World", "I love MERN", "Happy Long Weekend"];
  const [state, setstate] = useState("");
  const display = (e) => {
    console.log(e.target.value);
    setstate(e.target.value);
    return;
  };

  const textToShow = content[state];

  return (
    <div className="bg-primary d-flex flex-column align-items-center justify-content-center p-5">
      <h1>Tabs</h1>
      <div>
        {content.map((element, i) => {
          return (
            <button className="btn btn-light m-3" value={i} onClick={display}>
              Tab {i + 1}
            </button>
          );
        })}
      </div>

      <br />
      <div className="bg-light" style={{ width: "200px", height: "100px" }}>
        {textToShow}
      </div>
    </div>
  );
};

export default Tabs;
