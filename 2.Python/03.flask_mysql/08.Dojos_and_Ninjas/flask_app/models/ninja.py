from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import dojo


class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
# Now we use class methods to query our database

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(dojo))
        return ninjas

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO ninjas ( first_name, last_name, age, dojo_id ) VALUES ( %(first_name)s, %(last_name)s,%(age)s,%(dojo_id)s);'
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)
