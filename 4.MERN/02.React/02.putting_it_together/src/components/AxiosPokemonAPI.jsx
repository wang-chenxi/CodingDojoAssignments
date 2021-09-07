import React, { useState } from "react";
import axios from "axios";

const AxiosPokemonAPI = () => {
  const [state, setState] = useState();

  // const axiosCall = ()=> {
  //     axios.get("https://swapi.dev/api/people/1/") // making a GET request to Star Wars API
  //         .then(response => setState(response.data)) // successful response
  //         .catch(error => console.log(error)) // unsuccessful response
  // }

  const pokemonCall = () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10  ")
      .then((response) => setState(response.data.results)) // successful response
      .catch((error) => console.log(error));

  return (
    <div>
      <h1>Axios Pokemon API</h1>
      <button onClick={pokemonCall}>FetchPokemon</button>
      {state ? (
        state.map((pokemon) => <p>{pokemon.name}</p>)
      ) : (
        <h1>Waiting for your click</h1>
      )}
    </div>
  );
};

export default AxiosPokemonAPI;
