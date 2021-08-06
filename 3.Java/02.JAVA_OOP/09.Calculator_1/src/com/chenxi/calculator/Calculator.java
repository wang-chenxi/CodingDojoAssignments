package com.chenxi.calculator;

public class Calculator {

	private double operandOne;
	private double operandTwo;
	private String operation;
	private double results;
	
	
	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public Calculator() {
		
	}

	public double getOperandOne() {
		return operandOne;
	}

	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}

	public double getOperandTwo() {
		return operandTwo;
	}

	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}
	
	
	public double getResults() {
		return results;
	}

	public void setResults(double results) {
		this.results = results;
	}

	public void performOperation() {
		if(this.getOperation() == "+") {
			this.setResults(this.getOperandOne() + this.getOperandTwo());
		}else if(this.getOperation() == "-") {
			this.setResults(this.getOperandOne() - this.getOperandTwo());
		}
	}
	
}
