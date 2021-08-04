package com.chenxi.pokemon;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Pokedex pokedex = new Pokedex();
Pokemon pikachu = pokedex.createPokemon("Pikachu", 100,"mouse");
Pokemon Jenny = pokedex.createPokemon("Jenny", 100, "turtle");
		pikachu.attackPokemon(Jenny);
		System.out.print(Jenny.getHealth());
		pokedex.listPokemon();
		System.out.print(pokedex.pokemonInfo(Jenny));
		
		
	}

}
