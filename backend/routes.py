from flask import Blueprint, jsonify, request
from models import db, Widget

# Crear un Blueprint para las rutas de la API
api = Blueprint('api', __name__)

# Ruta para obtener todos los widgets
@api.route('/api/widgets', methods=['GET'])
def get_widgets():
    widgets = Widget.query.all()
    return jsonify([widget.to_dict() for widget in widgets])

# Ruta para crear un nuevo widget
@api.route('/api/widgets', methods=['POST'])
def create_widget():
    data = request.json
    new_widget = Widget(
        title=data['title'], 
        style=data['style'], 
        data=data['data']
    )
    db.session.add(new_widget)
    db.session.commit()
    return jsonify(new_widget.to_dict()), 201

# Ruta para obtener un widget específico por ID
@api.route('/api/widgets/<int:id>', methods=['GET'])
def get_widget(id):
    widget = Widget.query.get_or_404(id)
    return jsonify(widget.to_dict())

# Ruta para actualizar un widget existente
@api.route('/api/widgets/<int:id>', methods=['PUT'])
def update_widget(id):
    widget = Widget.query.get_or_404(id)
    data = request.json
    
    widget.title = data['title']
    widget.style = data['style']
    widget.data = data['data']
    
    db.session.commit()
    return jsonify(widget.to_dict())

# Ruta para eliminar un widget
@api.route('/api/widgets/<int:id>', methods=['DELETE'])
def delete_widget(id):
    widget = Widget.query.get_or_404(id)
    db.session.delete(widget)
    db.session.commit()
    return '', 204
