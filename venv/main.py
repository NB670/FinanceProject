from flask import Flask, render_template
import random

app = Flask(__name__, template_folder='templates', static_folder='static')


@app.route('/')
def base_page():
    return render_template("login.html")


@app.route('/finance')
def finance():
    return render_template("finance.html")


@app.route('/aboutus')
def aboutus():
    return render_template("aboutus.html")


@app.route('/index')
def home_page():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=random.randint(2000, 9000))