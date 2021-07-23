from flask.globals import session
from recipe_app.config.mysqlconnection import connectToMySQL
from flask import flash
from recipe_app import app


class Recipe:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.fast = data['fast']
        self.instruction = data['instruction']
        self.date = data['date']
        self.user_id = data['user_id']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO recipes ( name, description, fast, instruction, date, user_id, created_at, updated_at) VALUES ( %(name)s, %(description)s, %(fast)s, %(instruction)s, %(date)s, %(user_id)s,NOW(),NOW());'
        return connectToMySQL('recipe').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL('recipe').query_db(query)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes

    @classmethod
    def get_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"

        results = connectToMySQL('recipe').query_db(query, data)

        recipe = cls(results[0])
        return recipe

    @classmethod
    def update_by_id(cls, data):
        query = "UPDATE recipes SET name =%(name)s, description=%(description)s,fast=%(fast)s, instruction=%(instruction)s, date=%(date)s WHERE id = %(id)s;"
        connectToMySQL('recipe').query_db(query, data)
        return

    @classmethod
    def delete_by_id(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        connectToMySQL('recipe').query_db(query, data)
        return
