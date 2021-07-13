from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'this is a secret key'
# python -m pipenv install flask
# python -m pipenv shell
# python server.py
# REMEMBER to never render on a post!


@app.route('/')
def home():
    return render_template('index.html')


@app.errorhandler(404)
def no_response(not_assigned):
    return '404- there is no page here. Go to HOME page'


@app.route('/form', methods=['POST'])
def form():
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
