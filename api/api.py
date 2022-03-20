import time
from flask import Flask

app = Flask(__name__)

@app.route('/botname')
def get_bot_name():
    return {'botname': "bot_M1"}
