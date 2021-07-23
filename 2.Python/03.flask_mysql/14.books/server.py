from book_app import app
from book_app.controllers import books, authors

if __name__ == '__main__':
    app.run(debug=True)
