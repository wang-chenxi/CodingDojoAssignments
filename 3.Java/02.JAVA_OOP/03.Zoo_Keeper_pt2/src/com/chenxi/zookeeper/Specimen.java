package com.chenxi.zookeeper;

public class Specimen extends Mannal {

	public Specimen() {
		this.energyLevel = 300;
	}
	
	public void fly() {
		System.out.println("The bat is taking off... Energy -50");
		this.energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("So...well, nevermind. Energy +25");
		this.energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("The town is in fire... Energy -100");
		this.energyLevel -=100;
	}
	
}
