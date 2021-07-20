from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.ninjas = []
# Now we use class methods to query our database

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO dojos ( name ) VALUES ( %(name)s);'
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def get_dojo_with_ninjas(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"

        results = connectToMySQL('dojos_and_ninjas').query_db(query, data)

        dojo = cls(results[0])

        for row_from_db in results:
            ninja_data = {
                'id': row_from_db['ninjas.id'],
                'first_name': row_from_db['first_name'],
                'last_name': row_from_db['last_name'],
                'age': row_from_db['age'],
                'dojo_id': row_from_db['dojo_id'],

            }
            dojo.ninjas.append(ninja.Ninja(ninja_data))
        return dojo
