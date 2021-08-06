package com.chenxi.bankaccount;

public class BankAccount {
	//private
		
	private int accountNumber;
	private double checkingBalance;
	private double savingBalance;
	private static int accounts = 0;
	private static double total = 0;
	
	public BankAccount() {
		this.checkingBalance = 0;
		this.savingBalance = 0;
		this.accountNumber = this.generateAccount();
		accounts ++;
	}
	
	public double getCheckingBalance() {
		return checkingBalance;
	}
	
	
	public double getSavingBalance() {
		return savingBalance;
	}
	
	public int getAccountNumber() {
		return accountNumber;
	}
	
	public void deposit(double amount, boolean saving) {
		if(saving) {
			this.savingBalance += amount;
			total += amount;
		}else {
			this.checkingBalance += amount;
			total -= amount;
		}
	}
	
	public void withdraw(double amount, boolean saving) {
		if(saving) {
			//this.savingBalance = Math.max(this.savingBalance - amount, 0.0);
			if(this.savingBalance >=amount) {
				this.savingBalance -= amount;
				total -= amount;
			}else {
				System.out.print("not enough money");
			}
		}else {
			//this.checkingBalance = Math.max(this.checkingBalance - amount, 0.0);
			if(this.checkingBalance >=amount) {
				this.checkingBalance -= amount;
				total -= amount;
			}else {
				System.out.print("not enough money");
			}
		}
	}
	
	public double totalAmount() {
		return this.checkingBalance + this.savingBalance;
	}
	
	public int generateAccount() {
		//can implement with String format
		int number = 0;
		int i =0;
		while(i<10) {
			number += (Math.pow(10, i))*(Math.floor(Math.random()*10 + 1));
			i++;
		}
		return number;
	}


}
