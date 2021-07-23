from book_app.config.mysqlconnection import connectToMySQL
from flask import flash
from book_app.models import book


class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated = data['updated_at']
        self.books = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL('books').query_db(query)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO authors ( name,created_at, updated_at ) VALUES ( %(name)s,NOW(),NOW());'
        return connectToMySQL('books').query_db(query, data)

    @classmethod
    def get_author_with_books(cls, data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id WHERE authors.id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        author = cls(results[0])
        query2 = "SELECT * FROM books JOIN favorites ON books.id = favorites.book_id WHERE favorites.author_id = %(id)s;"
        books = connectToMySQL('books').query_db(query2, data)
        if books:
            for row_from_db in books:
                print(row_from_db)
                book_data = {
                    'id': row_from_db['id'],
                    'title': row_from_db['title'],
                    'num_of_pages': row_from_db['num_of_pages'],
                    'created_at': '',
                    'updated_at': ''
                }
                author.books.append(book.Book(book_data))
        return author
