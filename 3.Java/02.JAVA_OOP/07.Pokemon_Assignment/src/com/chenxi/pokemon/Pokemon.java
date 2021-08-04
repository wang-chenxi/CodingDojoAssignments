package com.chenxi.pokemon;

public class Pokemon {

	protected String name;
	protected int health;
	protected String type;
	
	public Pokemon(String name, int health, String type) {
this.name = name;
this.health = health;
this.type = type;
	}
	
	public void attackPokemon(Pokemon pokemon) {
		this.health -=10;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
