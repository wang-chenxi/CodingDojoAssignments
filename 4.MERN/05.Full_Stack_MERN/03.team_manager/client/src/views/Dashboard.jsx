import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Subnav from "../components/Subnav";

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      axios
        .delete(`http://localhost:8000/api/${id}`)
        .then((res) => setState(!state))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Subnav />
      <table className="table table-striped m-1 text-start border border-dark">
        <thead>
          <tr className="bg-dark text-light">
            <th scope="col">Team Name</th>
            <th scope="col">Preferred Position</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => {
            return (
              <tr key={idx} scope="row">
                <td> {team.name}</td>
                <td> {team.position}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(team._id)}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
