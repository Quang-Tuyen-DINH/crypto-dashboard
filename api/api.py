import time
from flask import Flask, abort
from werkzeug.routing import BaseConverter
from bots.bot_m1_interface import BotM1

app = Flask(__name__)

@app.route('/botname')
def get_bot_name():
    return {'botname': "bot_M1"}

@app.route('/<string:botname>/<string:method>', methods=['GET', 'POST'])
def process_command(botname, method):
    # Currenltly only "botm1" is supported
    if botname != "botm1":
        abort(500, message="Fatal error: invalid botname")
        return

    bot = BotM1("config/botm1.json")
    return bot.get_config_json()
