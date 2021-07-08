class User:
    bank_name = "First National Dojo"

    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.accounts = [BankAccount()]

    def open_another_account(self):
        self.accounts.append(BankAccount())
        return self

    def make_deposit(self, amount, account_index):
        self.accounts[account_index].balance += amount
        return self

    def make_withdrawal(self, amount, account_index):
        self.accounts[account_index].balance -= amount
        return self

    def display_user_balance(self):
        print(f"User:{self.name}")
        for account in self.accounts:
            print(
                f"account{self.accounts.index(account)}'s balance is: $ {account.balance}")
        return self

    def transfer_money(self, other_user, amount, accountIndex1, accountIndex2):
        self.accounts[accountIndex1].balance -= amount
        other_user.accounts[accountIndex2].balance += amount


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


user1 = User("Chenxi", "chenxi@dojo.com").open_another_account().make_deposit(500,
                                                                              0).make_deposit(250, 1).display_user_balance()
