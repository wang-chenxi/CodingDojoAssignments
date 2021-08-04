package com.chenxi.zookeeper;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Gorilla test = new Gorilla();
System.out.println(test.displayEnergy());
test.throwSomething();
System.out.println(test.displayEnergy());
test.eatBananas();
System.out.println(test.displayEnergy());
test.climb();
System.out.println(test.displayEnergy());

Specimen badguy = new Specimen();
System.out.println(badguy.displayEnergy());
badguy.attackTown();
badguy.attackTown();
System.out.println(badguy.displayEnergy());
badguy.eatHumans();
badguy.eatHumans();
System.out.println(badguy.displayEnergy());
badguy.fly();
System.out.println(badguy.displayEnergy());
	}

}
