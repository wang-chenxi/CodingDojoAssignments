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
        session["activities"] = []
        session["count"] = 0
    return render_template('index.html')
# @app.route('/foo') any other routes
# def that_routes_foo():
    # return whatever


@app.route('/reset', methods=["POST"])
def reset():
    session['gold'] = 0
    session["activities"] = []
    session["count"] = 0
    return redirect('/')


@app.route('/process_money', methods=["POST"])
def submitForm():
    building = request.form['building']
    if building == 'farm':
        gold = randrange(10, 21)
    if building == 'cave':
        gold = randrange(5, 11)
    if building == 'house':
        gold = randrange(2, 6)
    if building == 'casino':
        gold = randrange(-50, 51)
    session["gold"] += gold
    session["count"] += 1
    now = datetime.now()
    current_time = now.strftime("%D %H: %M: %S")
    # if gold > 0:
    #     session["activities"].insert(0,
    #                                  f"Earned {gold} golds from the {building}! {current_time}")
    # else:
    #     session["activities"].insert(0,
    #                                  f"Entered a casino and lost {abs(gold)} golds... {current_time}")
    if gold > 0:
        session["activities"].insert(0,
                                     {"gold": gold, "building": building, "time": current_time, "earn": "true"})
    else:
        session["activities"].insert(0,
                                     {"gold": abs(gold), "building": building, "time": current_time, "earn": "false"})

    return redirect('/')


# this must be below ALL routes
if __name__ == '__main__':
    app.run(debug=True)
