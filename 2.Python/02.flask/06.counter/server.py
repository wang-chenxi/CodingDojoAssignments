from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
# REMEMBER to never render on a post!
app.secret_key = "I am a key"


@app.route('/')
def home():
    if "count" not in session:
        session["count"] = 1
    session["count"] += 1
    return render_template('index.html')


@app.route('/destroy_session')
def add2():
    session["count"] = 0
    return redirect("/")


@app.route('/2visit')
def destry():
    session["count"] += 1
    return redirect("/")


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


if __name__ == '__main__':
    app.run(debug=True)
