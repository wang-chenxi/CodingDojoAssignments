import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="d-flex gap-3 m-3 ">
        <Link to={"/players/list"} className="btn btn-primary">
          Manage Players
        </Link>
        <Link to={"/status/game/1"} className="btn btn-primary">
          Manage Player Status
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
