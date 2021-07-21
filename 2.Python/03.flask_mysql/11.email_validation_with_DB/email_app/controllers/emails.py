from flask import render_template, request, redirect, session
from email_app import app
from email_app.models.email import Email


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    if not Email.validate_email(request.form):
        return redirect('/')
    data = {
        'address': request.form['address']
    }
    Email.save(data)
    session["email"] = request.form['address']
    return redirect('/success')


@app.route('/success')
def ninjas():
    emails = Email.get_all()
    return render_template('success.html', emails=emails)
