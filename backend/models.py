from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Widget(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    style = db.Column(db.JSON, nullable=False)
    data = db.Column(db.JSON, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'style': self.style,
            'data': self.data
        }
