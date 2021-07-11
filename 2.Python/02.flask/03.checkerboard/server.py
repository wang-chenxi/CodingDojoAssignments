# pipenv install flask ..... to make pipfile and pipfile.lock
# pipenv shell ..... to enter into shell
# python server.py ..... start your server
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def defualt():
    return render_template('index.html', column=8, row=8, color1="black", color2="red")


@app.route('/<row>')
def rows(row):
    return render_template('index.html', column=8, row=int(row), color1="black", color2="red")


@app.route('/<column>/<row>')
def column_row(column, row):
    return render_template('index.html', column=int(column), row=int(row), color1="black", color2="red")


@app.route('/<column>/<row>/<color1>/<color2>')
def choose_color(column, row, color1, color2):
    return render_template('index.html', column=int(column), row=int(row), color1=color1, color2=color2)


# this must be below ALL routes
if __name__ == '__main__':
    app.run(debug=True)
