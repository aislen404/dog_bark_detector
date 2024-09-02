import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Logs from './components/Logs';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />  {/* Ruta para el Dashboard */}
            <Route path="/settings" element={<Settings />} />  {/* Ruta para Configuración */}
            <Route path="/logs" element={<Logs />} />  {/* Ruta para Logs */}
        </Routes>
    </Router>
);

export default AppRoutes;
