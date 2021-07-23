from book_app.config.mysqlconnection import connectToMySQL
from flask import flash
from book_app.models import author


class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        # default/expression: CURRENT_TIMESTAMP
        self.created_at = data['created_at']
        # default/expression: CURRENT_TIMESTAMP ON UPDATE CURRENT TIMESTMAP
        self.updated = data['updated_at']
        self.authors = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL('books').query_db(query)
        books = []
        for book in results:
            books.append(cls(book))
        return books

    @classmethod
    def save(cls, data):
        query = 'INSERT INTO books ( title, num_of_pages,created_at, updated_at ) VALUES ( %(title)s, %(num_of_pages)s,NOW(),NOW());'
        return connectToMySQL('books').query_db(query, data)

    @classmethod
    def get_book_with_authors(cls, data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id WHERE books.id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        book = cls(results[0])
        query2 = "SELECT * FROM authors JOIN favorites ON authors.id = favorites.author_id WHERE favorites.book_id = %(id)s;"
        authors = connectToMySQL('books').query_db(query2, data)
        if authors:
            for row_from_db in authors:
                print("authors====>", row_from_db)
                author_data = {
                    'id': row_from_db['id'],
                    'name': row_from_db['name'],
                    'created_at': '',
                    'updated_at': ''
                }
                book.authors.append(author.Author(author_data))
        return book
