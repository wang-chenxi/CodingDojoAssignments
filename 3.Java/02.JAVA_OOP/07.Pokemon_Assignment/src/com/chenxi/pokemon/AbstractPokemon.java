package com.chenxi.pokemon;

public abstract class AbstractPokemon implements PokemonInterface {

	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		Pokemon pokemon = new Pokemon(name, health, type);
		return pokemon;
	}

	@Override
	public String pokemonInfo(Pokemon pokemon) {
		String info = pokemon.name + " " + pokemon.getHealth() + " " + pokemon.getType();
		return info;
	}

}
