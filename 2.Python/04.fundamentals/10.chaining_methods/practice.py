class User:
    bank_name = "First National Dojo"

    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User:{self.name}, Balance:${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount


user1 = User("user1", "user1@email.com")
user2 = User("user2", "user2@email.com")
user3 = User("user3", "user3@email.com")

user1.make_deposit(500).make_deposit(
    500).make_deposit(500).make_withdrawal(200).display_user_balance().display_user_balance()

user2.make_deposit(500).make_deposit(
    500).make_withdrawal(200).make_withdrawal(50).display_user_balance()

user1.transfer_money(user2, 300)
user1.display_user_balance()
user2.display_user_balance()
