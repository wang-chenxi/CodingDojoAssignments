package com.chenxi.phone;

public class Galaxy extends Phone implements Ringable{

	public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
		super(versionNumber, batteryPercentage, carrier, ringTone);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String ring() {
		return "Galaxy " + this.getVersionNumber() + " says "+ this.getRingTone();
	}

	@Override
	public String unlock() {
		return "Unlocking via finger print";
	}

	@Override
	public void displayInfo() {
		String info = "Galaxy " + this.getVersionNumber() + " from " +this.getCarrier(); 
		System.out.println(info);
	}

}
