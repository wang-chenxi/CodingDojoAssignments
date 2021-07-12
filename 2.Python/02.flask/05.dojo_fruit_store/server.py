from flask import Flask, render_template, request, redirect, session
from datetime import datetime

app = Flask(__name__)

app.secret_key = "input some secret key here"


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)
    session['strawberry'] = request.form['strawberry']
    session['raspberry'] = request.form['raspberry']
    session['apple'] = request.form['apple']
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['student_id'] = request.form['student_id']
    return redirect('/success')

# In order to redirect to a route, that route needs to exist


@app.route('/success')
def success():
    if 'first_name' not in session:
        return redirect('/')
    count = int(session['strawberry']) + \
        int(session['raspberry']) + int(session['apple'])
    now = datetime.now()
    current_time = now.strftime("%D %H:%M:%S")
    return render_template("checkout.html", count=count, current_time=current_time)


@app.route('/fruits')
def fruits():
    return render_template("fruits.html")


if __name__ == "__main__":
    app.run(debug=True)
