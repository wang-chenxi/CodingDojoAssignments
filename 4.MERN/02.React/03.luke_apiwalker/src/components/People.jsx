import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const People = () => {
  const history = useHistory();
  const [state, setState] = useState({});
  const [homeworld, setHomeworld] = useState({ url: "" });
  // define url in homeworld to avoid async issue
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id)
      .then((res) => {
        setState(res.data);
        axios
          .get(res.data.homeworld)
          .then((res) => {
            setHomeworld(res.data);
          })
          .catch((err) => console.log(err));
      }) // HANDLE SUCCESSFUL RESPONSE
      .catch((err) => history.push("/error")); // HANDLE ERROR RESPONSE
  }, [id]);

  const homeapart = homeworld.url.split("/");
  const homeId = homeapart[homeapart.length - 2];
  console.log(homeId);

  return (
    <div>
      <h3>{state.name}</h3>
      <p>Height: {state.height}</p>
      <p>Mass: {state.mass}</p>
      <p>Hair Color: {state.hair_color}</p>
      <p>Skin Color: {state.skin_color}</p>
      <a href={"/planets/" + homeId}>Visit the homeworld {homeworld.name}</a>
    </div>
  );
};

export default People;
