# pipenv install flask ..... to make pipfile and pipfile.lock
# pipenv shell ..... to enter into shell
# python server.py ..... start your server
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def foo():
    return 'Hello World!'
# @app.route('/foo') any other routes
# def that_routes_foo():
    # return whatever

# localhost:5000/dojo - have it say "Dojo!"


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/success')
def success():
    return "success"


# for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
@app.route('/hello/<name>')
def hello(name):
    print(name)
    return "Hello, " + name


# for a route '/users/____/____', two parameters in the url get passed as username and id
@app.route('/users/<username>/<id>')
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id

# Create one url pattern and function that can handle the following examples:
# localhost:5000/say/flask - have it say "Hi Flask!"
# localhost:5000/say/michael - have it say "Hi Michael!"
# localhost:5000/say/john - have it say "Hi John!"


@app.route('/say/<name>')
def say(name):
    return "Hi " + name+"!"


# Create one url pattern and function that can handle the following examples (HINT: int() will come in handy! For example int("35") returns 35):
# localhost:5000/repeat/35/hello - have it say "hello" 35 times
# localhost:5000/repeat/80/bye - have it say "bye" 80 times
# localhost:5000/repeat/99/dogs - have it say "dogs" 99 times
@app.route('/repeat//<times>/<word>')
def repeat(times, word):
    display = ""
    for i in range(0, int(times)):
        display += word + ", "
    return display


# this must be below ALL routes
if __name__ == '__main__':
    app.run(debug=True)
