# pipenv install flask ..... to make pipfile and pipfile.lock
# pipenv shell ..... to enter into shell
# python server.py ..... start your server
from flask import Flask, render_template, request, redirect, session
from random import randrange
from datetime import datetime

app = Flask(__name__)
app.secret_key = "this is a secret key"


@app.route('/')
def indexPage():
    if "gold" not in session:
        session["gold"] = 0
    now = datetime.now()
    current_time = now.strftime("%D %H: %M: %S")
    return render_template('index.html', current_time=current_time)
# @app.route('/foo') any other routes
# def that_routes_foo():
    # return whatever


@app.route('/process_money', method=["post"])
def submitForm():
    if request.form['building'] == 'farm':
        gold = randrange(10, 21)
        building = "farm"
    if request.form['building'] == 'cave':
        gold = randrange(5, 11)
        building = "cave"
    if request.form['building'] == 'house':
        gold = randrange(2, 6)
        building = "house"
    if request.form['building'] == 'casino':
        gold = randrange(-50, 51)
        building = "casino"
    session["gold"] += gold
    return redirect('index.html', gold=gold, building=building)


# this must be below ALL routes
if __name__ == '__main__':
    app.run(debug=True)
