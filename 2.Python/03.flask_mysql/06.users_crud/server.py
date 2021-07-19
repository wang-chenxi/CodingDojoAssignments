from flask import Flask, render_template, request, redirect, session
from user import User

# from dataclass import Dataclass
app = Flask(__name__)
app.secret_key = 'this is a secret key'
# python -m pipenv install flask
# python -m pipenv shell
# python server.py
# REMEMBER to never render on a post!


@app.route('/users')
def home():
    users = User.get_all()
    return render_template('index.html', users=users)


@app.route('/users/<id>')
def show(id):
    data = {'id': int(id)}
    user = User.get_by_id(data)
    return render_template('show.html', user=user)


@app.route('/users/<id>/edit')
def edit(id):
    data = {'id': int(id)}
    user = User.get_by_id(data)
    return render_template('update.html', user=user)


@app.route('/users/<id>/delete')
def delete(id):
    # call the get all classmethod to get all friends
    data = {'id': int(id)}
    User.delete_by_id(data)
    return redirect('/users')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/form')
def create():
    return render_template('create.html')


@app.route('/form', methods=['POST'])
def form():
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email']
    }
    User.save(data)
    return redirect('/users')


@app.route('/edit', methods=['POST'])
def edit_submit():
    data = {
        'id': request.form['id'],
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email'],
    }
    User.update_by_id(data)
    return redirect('/users')


if __name__ == '__main__':
    app.run(debug=True)
