# Sistema de Detección de Ladridos

Este proyecto es un sistema completo para la detección de ladridos de perros, que incluye una interfaz web moderna y personalizable para la visualización y gestión del sistema.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **Backend (Flask):** Proporciona APIs para la gestión de widgets y almacenamiento de datos.
- **Frontend (React.js):** Interfaz de usuario para la configuración y visualización de datos.

## Configuración y Ejecución

### Backend

1. Navega al directorio `backend`.
2. Instala las dependencias:
    ```
    pip install -r requirements.txt
    ```
3. Configura la base de datos:
    ```
    flask db init
    flask db migrate
    flask db upgrade
    ```
4. Inicia el servidor:
    ```
    flask run
    ```

### Frontend

1. Navega al directorio `frontend`.
2. Instala las dependencias:
    ```
    npm install
    ```
3. Inicia el servidor de desarrollo:
    ```
    npm start
    ```

## Despliegue

### Backend

1. Configura el backend en un servidor **Gunicorn** detrás de un proxy inverso **NGINX**.
2. Configura SSL para asegurar la comunicación HTTPS.

### Frontend

1. Compila el proyecto React para producción:
    ```
    npm run build
    ```
2. Despliega los archivos estáticos generados en un servidor **NGINX** o **Apache**.

## Contribuciones

Contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
