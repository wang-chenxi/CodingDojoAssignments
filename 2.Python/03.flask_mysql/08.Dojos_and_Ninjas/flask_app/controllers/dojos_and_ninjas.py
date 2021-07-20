from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


@app.route('/dojos')
def home():
    dojos = Dojo.get_all()
    return render_template('dojo.html', dojos=dojos)


@app.route('/create_dojo', methods=['POST'])
def create_dojo():
    data = {
        'name': request.form['name']
    }
    Dojo.save(data)
    return redirect('/dojos')


@app.route('/ninjas')
def ninjas():
    dojos = Dojo.get_all()
    return render_template('ninja_add.html', dojos=dojos)


@app.route('/create_ninja', methods=['POST'])
def create_ninja():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age'],
        'dojo_id': request.form['dojo_id']
    }
    print(data)
    Ninja.save(data)
    return redirect('/dojos')


@app.route('/dojos/<id>')
def dojo_show(id):
    data = {
        'id': id
    }
    dojo = Dojo.get_dojo_with_ninjas(data)
    print(dojo)
    return render_template('dojo_show.html', dojo=dojo)
