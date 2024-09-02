import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';  // Importamos las rutas definidas en routes.js
import './styles/main.css';  // Aseguramos que los estilos globales se importen aquí

function App() {
    return (
        <div className="App">
            <Navbar />  {/* Barra de navegación siempre visible */}
            <Sidebar />  {/* Menú lateral siempre visible */}
            <div className="content">  {/* Zona donde se renderizan las rutas */}
                <AppRoutes />  {/* Renderiza los componentes basados en la ruta */}
            </div>
        </div>
    );
}

export default App;
