from flask import render_template, request, redirect, session
from dojo_survey_app import app
from dojo_survey_app.models.survey import Survey


@app.route('/')
def home():
    return render_template('index.html')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/process', methods=['POST'])
def form():
    if not Survey.validate_survey(request.form):
        return redirect('/')
    session["name"] = request.form["name"].capitalize()
    session["location"] = request.form["location"].capitalize()
    session["language"] = request.form["language"].capitalize()
    session["comment"] = request.form["comment"]
    data = {
        'name': request.form['name'],
        'location': request.form['location'],
        'language': request.form['language'],
        'comment': request.form['comment']}
    Survey.save(data)
    return redirect('/result')


@app.route('/result')
def result():
    return render_template('result.html')
