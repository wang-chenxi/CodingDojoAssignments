from dojo_survey_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Survey:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated = data['updated']

    @staticmethod
    def validate_survey(survey):
        is_valid = True
        if len(survey['name']) == 0:
            flash("Name is required", "name")
            is_valid = False
        if len(survey['location']) == 0:
            flash("location is required", "location")
            is_valid = False
        if len(survey['language']) == 0:
            flash("language is required", "language")
            is_valid = False
        if len(survey['comment']) == 0:
            flash("comment is required", "comment")
            is_valid = False
        return is_valid

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO dojos ( name, location, language, comment ) VALUES ( %(name)s, %(location)s,%(language)s,%(comment)s);'
        return connectToMySQL('dojo_survey').query_db(query, data)
