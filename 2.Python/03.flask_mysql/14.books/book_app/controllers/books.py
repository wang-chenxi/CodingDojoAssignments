from book_app.models.author import Author
from flask import render_template, request, redirect, session
from book_app import app
from book_app.models.book import Book
from book_app.models.favorites import Favorite


@app.route('/books')
def books():
    books = Book.get_all()
    return render_template('books.html', books=books)


@app.route('/books/add', methods=['POST'])
def add_book():
    data = {
        'title': request.form['title'],
        'num_of_pages': int(request.form['num_of_pages'])
    }
    Book.save(data)
    return redirect('/books')


@app.route('/books/<int:id>')
def book_show(id):
    data = {
        'id': id
    }
    the_book = Book.get_book_with_authors(data)
    authors = Author.get_all()
    return render_template('book_show.html', book=the_book, authors=authors)


@app.route('/books/<id>/add_author', methods=['POST'])
def book_add_author(id):
    data = {
        'book_id': id,
        'author_id': request.form["author_id"]
    }
    Favorite.save(data)
    return redirect('/books/' + id)
