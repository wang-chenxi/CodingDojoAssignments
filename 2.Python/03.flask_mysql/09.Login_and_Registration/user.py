from flask import flash
import re

LETTERS_ONLY_REGEX = re.
EMAIL_REGEX = re.


class User:
    def__init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']

    @classmethod
    def save(cls, data):
        return

    @staticmethod
    def validate_registration(data):
        is_valid = True
        # first name
        if len(data['first_name']) == 0:
            flash("First name is required", "first_name")
            is_valid = False
        # at least two characters
        elif len(data['first_name']) < 2:
            flash("First name should be more than 2 characters", "first_name")
            is_valid = False
        elif not LETTERS_ONLY_REGEX.match(data['first_name']):
            flash("First name should be alphanumeric values", "first_name")
            is_valid = False

        # last name
        if len(data['last_name']) == 0:
            flash("last name is required", "last_name")
            is_valid = False
        # at least two characters
        elif len(data['last_name']) < 2:
            flash("Last name should be more than 2 characters", "last_name")
            is_valid = False
        elif not LETTERS_ONLY_REGEX.match(data['last_name']):
            flash("Last name should be alphanumeric values", "last_name")
            is_valid = False

        # email
        if len(data['email_name']) == 0:
            flash("email name is required", "email_name")
            is_valid = False
        elif not EMAIL_REGEX.match(data['email']):
            flash(
                "Invalid email format. Must meet username@emaildomin.com format", "email")
            is_valid = False
        # does not in the database already
        elif not User.is_email_not_in_database(data):
            flash("This email already exists", "email")
        # password
        if len(data['password']) == 0:
            flash("Password is required", "password")
            is_valid = False
        elif len(data['password']) < 8:
            flash("Password should be more than 8 characters", "password")
            is_valid = False
        # match the confirm password
        elif data['password'] != data['confirm_password']:
            flash("Password must match", "password")
            is_valid = False

        return is_valid

    @classmethod
    def is_email_not_in_database(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectTo

    @classmethod
    def get_user_by_email(cls, data):

    @classmethod
    def get_user_by_id(cls, data):

    @staticmethod
    def validate_login(data):
        # does an email in the database
        if User.is_email_not_in_database(data):
            flash("Invalid email/password", "email")
            return False

        # user in the database, if the password matches or not?
