from friend_app.config.mysqlconnection import connectToMySQL
from friend_app.models import user


class Friendship:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.friend_id = data['friend_id']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated = data['updated_at']
        self.user = data['user']
        self.friend = data['friend']

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO friendships (user_id,friend_id,created_at, updated_at ) VALUES ( %(user_id)s, %(friend_id)s,NOW(),NOW());'
        return connectToMySQL('friendships').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friendships;"
        results = connectToMySQL('friendships').query_db(query)
        friendships = []
        if results:
            for friendship in results:
                query1 = "SELECT * FROM users WHERE users.id = %(user_id)s;"
                result1 = connectToMySQL(
                    'friendships').query_db(query1, friendship)
                friendship["user"] = result1[0]
                query2 = "SELECT * FROM users WHERE users.id = %(friend_id)s;"
                result2 = connectToMySQL(
                    'friendships').query_db(query2, friendship)
                friendship["friend"] = result2[0]
                friendships.append(cls(friendship))
                print(result1[0])
        return friendships
