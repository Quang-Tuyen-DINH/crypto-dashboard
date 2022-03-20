import json
from types import SimpleNamespace

class BotConfig():
    def __init__(self, file_name):
        self.file_name = file_name
        f = open(file_name)
        self.config_data = json.load(f)

    def get_config_json(self):
        return self.config_data


