import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Planets = () => {
  const history = useHistory();
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/" + id)
      .then((res) => setState(res.data)) // HANDLE SUCCESSFUL RESPONSE
      .catch((err) => history.push("/error")); // HANDLE ERROR RESPONSE
  }, [id]);

  return (
    <div>
      <h3>{state.name}</h3>
      <p>Climate: {state.climate}</p>
      <p>Terrain: {state.terrain}</p>
      <p>Surface Water: {state.surface_water}</p>
      <p>Population: {state.population}</p>
    </div>
  );
};

export default Planets;
