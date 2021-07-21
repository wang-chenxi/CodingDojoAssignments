from flask import render_template, request, redirect, session
from login_app import app
from login_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


@app.route('/')
def home():
    return render_template('index.html')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/create', methods=['POST'])
def form():
    if not User.validate_registration(request.form):
        return redirect('/')

    hashed_password = bcrypt.generate_password_hash(request.form['password'])

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': hashed_password
    }
    user = User.save(data)
    session['user_id'] = user
    return redirect('/success')


@app.route('/login', methods=['POST'])
def login():
    login_validation = User.validate_login(request.form)
    if not login_validation:
        return redirect('/')

    session['user_id'] = login_validation.id
    return redirect('/success')


@app.route('/success')
def dashboard():
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id": session["user_id"]
    }
    logged_in_user = User.get_user_by_id(data)

    if logged_in_user == False:
        return redirect('/')

    return render_template('dashboard.html', logged_in_user=logged_in_user)


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
