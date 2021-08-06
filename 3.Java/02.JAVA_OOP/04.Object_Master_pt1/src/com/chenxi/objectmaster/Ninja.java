package com.chenxi.objectmaster;

public class Ninja extends Human{


	public Ninja() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Ninja(int strength, int stealth, int intelligence, int health) {
		super(strength, stealth, intelligence, health);
		// TODO Auto-generated constructor stub
	}



	public void steal(Human human) {
		human.health -= this.stealth;
		this.health -= 10;
	}
	
	
}
