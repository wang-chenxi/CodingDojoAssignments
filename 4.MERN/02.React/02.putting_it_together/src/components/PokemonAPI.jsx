import React, { useState } from "react";

const PokemonAPI = () => {
  const [state, setState] = useState();
  const pokemonCall = () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10  ")
      .then((response) => response.json()) // successful response
      .then((jsonRes) => setState(jsonRes.results))
      .catch((error) => console.log(error)); // unsuccessful response
  return (
    <div>
      <h1>Pokemon API</h1>
      <button onClick={pokemonCall}>FetchPokemon</button>
      {state ? (
        state.map((pokemon) => <p>{pokemon.name}</p>)
      ) : (
        <h1>Waiting for your click</h1>
      )}
    </div>
  );
};

export default PokemonAPI;
