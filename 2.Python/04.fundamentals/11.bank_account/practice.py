class BankAccount:

    accounts = []

    def __init__(self, balance=0):
        self.balance = balance
        self.interest_rate = 0.01
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("not enough money, charged $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.interest_rate
        return self

    @classmethod
    def account_info(cls):
        for account in cls.accounts:
            print(account.balance)


account1 = BankAccount()
account2 = BankAccount(500)

account1.deposit(500).deposit(500).deposit(500).withdraw(
    200).yield_interest().display_account_info()
account2.deposit(100).deposit(100).withdraw(1).withdraw(1).withdraw(
    1).withdraw(1).yield_interest().display_account_info()

BankAccount.account_info()
