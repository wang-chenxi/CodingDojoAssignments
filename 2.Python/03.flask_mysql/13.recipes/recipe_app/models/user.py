from recipe_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
from recipe_app import app
import re

bcrypt = Bcrypt(app)
LETTERS_ONLY_REGEX = re.compile(r'^[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated_at = data['updated_at']
        self.recipe = []

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO users ( first_name, last_name, email, password,created_at, updated_at) VALUES ( %(first_name)s, %(last_name)s, %(email)s, %(password)s,NOW(),NOW());'
        return connectToMySQL('recipe').query_db(query, data)

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
            flash("First name should be letters only", "first_name")
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
            flash("Last name should be letters only", "last_name")
            is_valid = False

        # email
        if len(data['email']) == 0:
            flash("email name is required", "email")
            is_valid = False
        elif not EMAIL_REGEX.match(data['email']):
            flash(
                "Invalid email format. Must meet username@emaildomin.com format", "email")
            is_valid = False
        # does not in the database already
        elif not User.is_email_not_in_database(data):
            flash("This email already exists", "email")
            is_valid = False
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
        results = connectToMySQL(
            'recipe').query_db(query, data)
        return len(results) == 0

    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(
            'recipe').query_db(query, data)
        if len(results) == 0:
            return False
        else:
            return cls(results[0])

    @classmethod
    def get_user_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(
            'recipe').query_db(query, data)
        if len(results) > 0:
            return cls(results[0])
        else:
            return False

    @staticmethod
    def validate_login(data):
        if len(data['email']) == 0:
            flash("email/password is required", "login_email")
            return False

        if len(data['password']) == 0:
            flash("email/password is required", "login_email")
            return False

        user_in_db = User.get_user_by_email(data)
        # does an email in the database
        if not user_in_db:
            flash("Invalid email/password", "login_email")
            return False

        # user in the database, if the password matches or not?
        if not bcrypt.check_password_hash(user_in_db.password, data['password']):
            flash("Invalid email/password", "login_email")
            return False

        return user_in_db
