from flask import Flask, render_template, request, redirect, session
from user import User

# from dataclass import Dataclass
app = Flask(__name__)
app.secret_key = 'this is a secret key'
# python -m pipenv install flask
# python -m pipenv shell
# python server.py
# REMEMBER to never render on a post!


@app.route('/')
def home():
    # call the get all classmethod to get all friends
    users = User.get_all()
    return render_template('index.html')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/form', methods=['POST'])
def form():
    # data = {
    # 'fname': request.form['fname'],
    # 'lname' : request.form['lname'],
    # 'occ' : request.form['occ']
    # }
    # Dataclass.save(data)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
