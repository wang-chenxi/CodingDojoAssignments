from friend_app.config.mysqlconnection import connectToMySQL


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated = data['updated_at']
        self.friends = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('friendships').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO users ( first_name, last_name,created_at, updated_at ) VALUES ( %(first_name)s, %(last_name)s,NOW(),NOW());'
        return connectToMySQL('friendships').query_db(query, data)
