from flask import Flask, jsonify, request
from models import db, Widget
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/api/widgets', methods=['GET'])
def get_widgets():
    widgets = Widget.query.all()
    return jsonify([widget.to_dict() for widget in widgets])

@app.route('/api/widgets', methods=['POST'])
def create_widget():
    data = request.json
    new_widget = Widget(title=data['title'], style=data['style'], data=data['data'])
    db.session.add(new_widget)
    db.session.commit()
    return jsonify(new_widget.to_dict()), 201

if __name__ == '__main__':
    app.run(debug=True)
