![Dog Bark Detector](assets/dog_bark_detector.jpeg)
# Sistema de Detección de Ladridos

Este proyecto es un sistema completo para la detección de ladridos de perros, que incluye un backend en Flask y un frontend en React.js. El sistema permite gestionar y visualizar eventos en tiempo real a través de una interfaz web moderna y personalizable. Además, está diseñado para funcionar en una Raspberry Pi, con componentes de hardware específicos para la detección de sonido y la emisión de señales ultrasónicas.

## Estructura General del Proyecto

El proyecto está dividido en dos partes principales: el backend desarrollado en Flask y el frontend desarrollado en React.js.

```
dog_bark_detector/
│
├── backend/                  # Backend Flask
│   ├── app.py                # Aplicación Flask principal
│   ├── models.py             # Definición de modelos SQLAlchemy
│   ├── routes.py             # Rutas y endpoints API
│   ├── database.db           # Base de datos SQLite
│   ├── requirements.txt      # Dependencias de Python
│   └── README.md             # Instrucciones de configuración y ejecución del backend
│
├── frontend/                 # Frontend React.js
│   ├── public/
│   │   └── index.html        # Archivo HTML principal
│   ├── src/
│   │   ├── components/       # Componentes de React
│   │   │   ├── Dashboard.js  # Componente principal del dashboard
│   │   │   ├── Navbar.js     # Barra de navegación superior
│   │   │   ├── Sidebar.js    # Menú lateral para navegación
│   │   │   ├── Widget.js     # Componente base para widgets
│   │   │   ├── Settings.js   # Página de configuración
│   │   │   ├── Logs.js       # Página de logs
│   │   │   └── ChartComponent.js # Componente de gráficos (Chart.js)
│   │   ├── services/         # Servicios para interactuar con la API
│   │   │   └── api.js        # Funciones para llamadas HTTP
│   │   ├── styles/           # Archivos CSS para estilos globales
│   │   │   └── main.css
│   │   ├── App.js            # Punto de entrada del proyecto
│   │   ├── index.js          # Renderizado del ReactDOM
│   │   └── routes.js         # Definición de rutas y componentes principales
│   ├── package.json          # Dependencias de Node.js
│   ├── package-lock.json     # Versión bloqueada de dependencias
│   └── README.md             # Instrucciones de configuración y ejecución del frontend
│
└── README.md                 # Documentación general del proyecto
```

## Configuración de la Raspberry Pi

### Requisitos Previos

- **Raspberry Pi (Modelo 3 o superior)**
- **Sistema operativo:** Raspberry Pi OS (preferiblemente Lite)
- **Acceso a internet:** Para instalar dependencias y clonar el repositorio.
- **Acceso SSH:** Recomendado para configurar remotamente la Raspberry Pi.
  
### Pasos de Configuración

1. **Actualización del Sistema:**
   - Asegúrate de que tu Raspberry Pi esté actualizada:
     ```bash
     sudo apt-get update
     sudo apt-get upgrade
     ```

2. **Instalación de Python y pip:**
   - Asegúrate de tener Python y pip instalados:
     ```bash
     sudo apt-get install python3 python3-pip
     ```

3. **Clonación del Repositorio:**
   - Clona este repositorio en tu Raspberry Pi:
     ```bash
     git clone https://github.com/tuusuario/dog_bark_detector.git
     cd dog_bark_detector
     ```

4. **Configuración del Backend:**
   - Navega al directorio `backend` y configura el entorno:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
   - Configura la base de datos SQLite:
     ```bash
     flask db init
     flask db migrate
     flask db upgrade
     ```
   - Inicia el servidor Flask:
     ```bash
     flask run --host=0.0.0.0
     ```

5. **Configuración del Frontend:**
   - Navega al directorio `frontend` y configura el entorno:
     ```bash
     cd ../frontend
     npm install
     ```
   - Inicia el servidor de desarrollo de React:
     ```bash
     npm start
     ```

## Componentes de Hardware a Montar

- **Módulo de Micrófono USB o Analógico con ADC (KY-038 recomendado)**
- **Transductor Ultrasónico o Buzzer Piezoeléctrico (rango de 20-40 kHz)**
- **Cables y Conectores para las conexiones**
- **Fuente de Alimentación 5V 2.5A para la Raspberry Pi**
- **Protoboard y Conectores GPIO para el montaje**

### Lista de Componentes:

| Componente                 | Descripción                                      |
|----------------------------|--------------------------------------------------|
| **Raspberry Pi**           | Modelo 3 o superior                              |
| **Módulo de Micrófono**    | USB o Analógico con ADC                          |
| **Transductor Ultrasónico**| Buzzer Piezoeléctrico (20-40 kHz)                |
| **Cables Jumper**          | Conexiones entre componentes y Raspberry Pi      |
| **Protoboard**             | Para montaje temporal                            |
| **Fuente de Alimentación** | 5V 2.5A (para Raspberry Pi)                      |


## Esquema de Conexiones GPIO

El siguiente esquema muestra cómo conectar el buzzer y el micrófono a los pines GPIO de la Raspberry Pi:

### Conexión del Buzzer:

- **Pin positivo del Buzzer** -> GPIO 18 (Pin 12 en el esquema físico)
- **Pin negativo del Buzzer** -> GND (Pin 6 en el esquema físico)

### Conexión del Micrófono (KY-038):

- **VCC del Micrófono** -> 3.3V (Pin 1 en el esquema físico)
- **GND del Micrófono** -> GND (Pin 9 en el esquema físico)
- **OUT del Micrófono** -> GPIO 17 (Pin 11 en el esquema físico)

**Esquema Físico de Conexiones:**

```plaintext
Raspberry Pi GPIO Header (modelo 3 o superior)
------------------------------------------------
| 3.3V | 5V  | GPIO2 | 5V  | GPIO3 | GND  | GPIO4 | GPIO14 | GND  | GPIO15 | GPIO17 | GPIO18 |
| GND  | GPIO23 | GPIO24 | GND  | GPIO25 | GPIO8 | GPIO7 |
------------------------------------------------

Conexiones:
Buzzer -> GPIO18 (Pin 12) y GND (Pin 6)
Micrófono -> VCC (Pin 1), GND (Pin 9), OUT (GPIO17, Pin 11)
```

## Montaje y Pruebas

1. **Montaje Físico:**
   - Sigue el esquema de conexiones GPIO proporcionado para conectar el buzzer y el micrófono a la Raspberry Pi usando una protoboard.

2. **Prueba de Funcionamiento:**
   - Una vez que el hardware esté conectado y el software configurado, realiza pruebas para asegurarte de que el sistema esté captando correctamente los sonidos y emitiendo las señales ultrasónicas.
   - Accede a la interfaz web desde cualquier navegador en la misma red para monitorear y configurar el sistema:
     ```bash
     http://<IP-de-tu-Raspberry-Pi>:3000
     ```

## Despliegue

### Backend

1. Configura el backend en un servidor **Gunicorn** detrás de un proxy inverso **NGINX**.
2. Configura SSL para asegurar la comunicación HTTPS.

### Frontend

1. Compila el proyecto React para producción:
    ```bash
    npm run build
    ```
2. Despliega los archivos estáticos generados en un servidor **NGINX** o **Apache**.

## Contribuciones

Contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request en GitHub.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
