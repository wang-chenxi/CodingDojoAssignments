from flask import Flask, render_template, request, redirect, session
from friend_app import app
from friend_app.models.user import User
from friend_app.models.friendship import Friendship

#from dataclass import Dataclass

# python -m pipenv install flask
# python -m pipenv shell
# python server.py
# REMEMBER to never render on a post!


@app.route('/friendships')
def home():
    # friendships = Friendship.get_all()
    users = User.get_all()
    friends = User.get_all()
    friendships = Friendship.get_all()
    return render_template('index.html', users=users, friends=friends, friendships=friendships)


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/friendships/adduser', methods=['POST'])
def adduser():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
    }
    User.save(data)
    return redirect('/friendships')


@app.route('/friendships/addfriendship', methods=['POST'])
def addfriendship():
    data = {
        'user_id': request.form['user_id'],
        'friend_id': request.form['friend_id'],
    }
    Friendship.save(data)
    return redirect('/friendships')
