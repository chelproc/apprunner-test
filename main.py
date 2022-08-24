from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello!"


app.run(None, 8080)