import React from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <div>
      <nav className="d-flex gap-3 m-1 ">
        <Link to={"/players/list"} className="btn btn-primary mb-3">
          List
        </Link>
        <Link to={"/players/addplayer"} className="btn btn-primary mb-3">
          Add Player
        </Link>
      </nav>
    </div>
  );
};

export default Subnav;
