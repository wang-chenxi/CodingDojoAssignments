package com.chenxi.objectmaster;

public class Samurai extends Human{
	
	private static int count = 0;
	
	public Samurai() {
		this.health =200;
		count ++;
	}
	
	public void deathBlow(Human human) {
		human.health = 0;
		this.health /= 2;
	}
	
	public void meditate() {
		this.health = 200;
	}
	
	public static int howMany() {
		return count;
	}

}
