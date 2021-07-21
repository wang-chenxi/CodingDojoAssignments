from email_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class Email:
    def __init__(self, data):
        self.id = data['id']
        self.address = data['address']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']

    @staticmethod
    def validate_email(email):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(email['address']):
            flash("Invalid email address!", "address")
            is_valid = False
        if not Email.email_is_unique(email):
            flash("Email already exists!", "address")
            is_valid = False
        return is_valid

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO emails ( address ) VALUES ( %(address)s);'
        return connectToMySQL('email_validation').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_validation').query_db(query)
        emails = []
        for email in results:
            emails.append(cls(email))
        return emails

    @staticmethod
    def email_is_unique(email):
        query = 'SELECT * FROM emails where address = %(address)s;'
        result = connectToMySQL('email_validation').query_db(query, email)
        if len(result) > 0:
            return False
        return True
