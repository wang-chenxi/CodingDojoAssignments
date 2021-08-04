package com.chenxi.phone;

public class IPhone extends Phone implements Ringable {

	public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
		super(versionNumber, batteryPercentage, carrier, ringTone);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String ring() {
		return "iPhone " + this.getVersionNumber() + " says "+ this.getRingTone();
	}

	@Override
	public String unlock() {
		return "Unlocked your iphone via facial recognition";
	}

	@Override
	public void displayInfo() {
		String info ="iPhone " + this.getVersionNumber() + " from " + this.getCarrier();
		System.out.println(info);
	}

}
