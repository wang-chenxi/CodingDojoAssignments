package com.chenxi.bankaccount;

public class BankAccount {
protected int accountNumber;
protected double checkingBalance;
protected double savingBalance;
protected static int accounts = 0;
protected static int total = 0;

public BankAccount() {
	this.checkingBalance = 0;
	this.savingBalance = 0;
	this.accountNumber = this.generateAccount();
	accounts ++;
	total ++;
}

public double getCheckingBalance() {
	return checkingBalance;
}

public void setCheckingBalance(double checkingBalance) {
	this.checkingBalance = checkingBalance;
}

public double getSavingBalance() {
	return savingBalance;
}

public void setSavingBalance(double savingBalance) {
	this.savingBalance = savingBalance;
}


public int getAccountNumber() {
	return accountNumber;
}

public void deposit(double amount, boolean saving) {
	if(saving) {
		this.savingBalance += amount;
	}else {
		this.checkingBalance += amount;
	}
}

public void withdraw(double amount, boolean saving) {
	if(saving) {
		this.savingBalance = Math.max(this.savingBalance - amount, 0.0);
	}else {
		this.checkingBalance = Math.max(this.checkingBalance - amount, 0.0);
	}
}

public int generateAccount() {
	int number = 0;
	int i =0;
	while(i<10) {
		number += (Math.pow(10, i))*(Math.floor(Math.random()*10 + 1));
		i++;
	}
	return number;
}


}
