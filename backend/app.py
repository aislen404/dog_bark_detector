from flask import Flask
from models import db
from routes import api  # Importar el Blueprint

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Registrar el Blueprint
app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True)
