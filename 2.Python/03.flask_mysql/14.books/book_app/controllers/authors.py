from flask import render_template, request, redirect, session
from book_app import app
from book_app.models.author import Author
from book_app.models.book import Book
from book_app.models.favorites import Favorite


@app.route('/authors')
def authors():
    authors = Author.get_all()
    return render_template('authors.html', authors=authors)


@app.route('/authors/add', methods=['POST'])
def add_author():
    data = {
        'name': request.form['name']
    }
    Author.save(data)
    return redirect('/authors')


@app.route('/authors/<int:id>')
def author_show(id):
    data = {
        'id': id
    }
    the_author = Author.get_author_with_books(data)
    books = Book.get_all()
    return render_template('author_show.html', author=the_author, books=books)


@app.route('/authors/<id>/add_book', methods=['POST'])
def author_add_book(id):
    data = {
        'book_id': request.form["book_id"],
        'author_id': id
    }
    Favorite.save(data)
    return redirect('/authors/' + id)
