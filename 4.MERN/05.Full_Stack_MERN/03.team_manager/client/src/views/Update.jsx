import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const [state, setState] = useState(false);
  const game = id === "1" ? "gameOne" : id === "2" ? "gameTwo" : "gameThree";

  //get all team info
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  // change specific team game status
  const clickHandler = (team, operation) => {
    team[game] = operation;

    // update the team's game status
    // update the team to the db
    axios
      .put(`http://localhost:8000/api/${team._id}`, team)
      .then((res) => {
        setState(!state);
      })
      .catch((err) => {
        console.log("CATCH: ", err.response.data);
        const { errors } = err.response.data;
        let errorObj = {};
        for (let [key, value] of Object.entries(errors)) {
          errorObj[key] = value.message;
        }
      });
  };

  return (
    <div>
      <h1 className="text-start">Player Status - Game {id}</h1>
      <h3 className="mt-5 mb-5">
        <Link to={"/status/game/1"}>Game 1</Link> |{" "}
        <Link to={"/status/game/2"}>Game 2</Link> |{" "}
        <Link to={"/status/game/3"}>Game 3</Link>
      </h3>
      <table className="table table-striped m-1 text-start">
        <thead>
          <tr className="bg-dark text-light">
            <th scope="col">Team Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => {
            return (
              <tr key={idx} scope="row">
                <td> {team.name}</td>
                <td className="d-flex gap-5">
                  <button
                    className={
                      team[game] === 1 ? `btn btn-success` : `btn btn-light`
                    }
                    onClick={() => clickHandler(team, 1)}
                  >
                    Playing
                  </button>
                  <button
                    className={
                      team[game] === 2 ? `btn btn-danger` : `btn btn-light`
                    }
                    onClick={() => clickHandler(team, 2)}
                  >
                    Not Playing
                  </button>
                  <button
                    className={
                      team[game] === 0 ? `btn btn-warning` : `btn btn-light`
                    }
                    onClick={() => clickHandler(team, 0)}
                  >
                    Undecided
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

export default Update;
