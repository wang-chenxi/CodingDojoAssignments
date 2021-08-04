package com.chenxi.bankaccount;

public class Main {

	public static void main(String[] args) {
		BankAccount test = new BankAccount();
		System.out.println(test.getAccountNumber());
		test.deposit(500, false);
		System.out.println(test.getCheckingBalance());
		System.out.println(test.getSavingBalance());

	}

}
