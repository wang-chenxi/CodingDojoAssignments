package com.chenxi.calculator;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator calculator = new Calculator();
		calculator.setOperandOne(1);
		System.out.println(calculator.getOperandOne());
		calculator.setOperandTwo(3);
		System.out.println(calculator.getOperandTwo());
		calculator.setOperation("+");
		calculator.performOperation();
		System.out.println(calculator.getResults());
	}

}
