package com.chenxi.pokemon;
import java.util.ArrayList;

public class Pokedex extends AbstractPokemon implements PokemonInterface {

	protected ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();
	
	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		// TODO Auto-generated method stub
		Pokemon pokemon = super.createPokemon(name, health, type);
		myPokemons.add(pokemon);
		return pokemon;
	}


	@Override
	public void listPokemon() {
		for(Pokemon pokemon : myPokemons) {
			System.out.println(pokemon.getName());
		}
	}
}
