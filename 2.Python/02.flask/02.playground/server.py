# pipenv install flask ..... to make pipfile and pipfile.lock
# pipenv shell ..... to enter into shell
# python server.py ..... start your server
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/play')
def play3():
    return render_template('index.html', boxes=3, color="lightblue")
# @app.route('/foo') any other routes
# def that_routes_foo():
    # return whatever


@app.route('/play/<x>')
def play_times(x):
    return render_template('index.html', boxes=int(x), color="lightblue")


@app.route('/play/<x>/<color>')
def play_times_colors(x, color):
    return render_template('index.html', boxes=int(x), color=color)


# this must be below ALL routes
if __name__ == '__main__':
    app.run(debug=True)
