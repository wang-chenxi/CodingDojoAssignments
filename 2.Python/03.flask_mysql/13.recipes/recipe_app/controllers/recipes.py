from flask import render_template, request, redirect, session
from recipe_app import app
from recipe_app.models.user import User
from recipe_app.models.recipe import Recipe


@app.route('/recipes/<int:id>')
def show_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    recipe = Recipe.get_recipe(data)
    return render_template('show.html', recipe=recipe)


@app.route('/recipes/new')
def add_recipe():
    if 'user_id' not in session:
        return redirect('/')
    return render_template('new.html')


@app.route('/recipes/new', methods=['POST'])
def submit_recipe():
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "fast": request.form["fast"],
        "instruction": request.form["instruction"],
        "date": request.form["date"],
        "user_id": session["user_id"]
    }
    Recipe.save(data)
    return redirect('/dashboard')


@app.route('/recipes/edit/<id>')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    recipe = Recipe.get_recipe(data)
    return render_template('edit.html', recipe=recipe)


@app.route('/recipes/edit/<id>', methods=['POST'])
def update_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id": id,
        "name": request.form["name"],
        "description": request.form["description"],
        "fast": request.form["fast"],
        "instruction": request.form["instruction"],
        "date": request.form["date"]
    }
    Recipe.update_by_id(data)
    return redirect('/dashboard')


@app.route('/recipes/delete/<id>')
def delete_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    Recipe.delete_by_id(data)
    return redirect('/dashboard')
