from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'this is a secret key'
# python -m pipenv flask
# python -m pipenv shell
# python server.py
# REMEMBER to never render on a post!


@app.route('/')
def home():
    if "number" not in session:
        session["number"] = random.randint(1, 100)
    return render_template('index.html')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/guess', methods=['POST'])
def form():
    guess = int(request.form["guess"])
    if guess > session["number"]:
        session["feedback"] = "Too High!"
    elif guess < session["number"]:
        session["feedback"] = "Too Low!"
    else:
        session["feedback"] = f"{session['number']} was the correct answer!"
    return redirect('/')


@app.route('/playagain')
def playagain():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
