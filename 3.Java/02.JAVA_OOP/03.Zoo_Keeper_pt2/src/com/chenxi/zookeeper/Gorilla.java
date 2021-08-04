package com.chenxi.zookeeper;

public class Gorilla extends Mannal {

	public Gorilla() {
	}
	
	public void throwSomething() {
		System.out.println("the gorilla has thrown something! energy -5");
		this.energyLevel -= 5;
	}
	
	public void eatBananas() {
		System.out.println("Gorilla is very happy! energy +10");
		this.energyLevel += 10;
	}
	
	public void climb() {
		System.out.println("Gorilla has climbed on a tree! energy -10");
		this.energyLevel -=10;
	}

}
