# Backend para Sistema de Detección de Ladridos

Este es el backend del sistema de detección de ladridos desarrollado en Flask. Proporciona APIs para gestionar widgets y almacenar configuraciones y logs en una base de datos SQLite.

## Configuración

1. Clona el repositorio.
2. Navega al directorio `backend`.
3. Instala las dependencias:
    ```
    pip install -r requirements.txt
    ```
4. Configura la base de datos:
    ```
    flask db init
    flask db migrate
    flask db upgrade
    ```
5. Inicia el servidor:
    ```
    flask run
    ```

El servidor estará disponible en `http://localhost:5000`.
