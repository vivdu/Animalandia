import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Perros from './pages/perros/Perros';
import Equipo from './pages/equipo/Equipo';
import Contactos from './pages/contacto/Contactos';
import Error404 from './pages/error404/Error404';
import Servicios from './pages/servicios/Servicios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/perros">
          <Perros />
        </Route>
        <Route path="/equipo">
          <Equipo />
        </Route>
        <Route path="/servicios">
          <Servicios />
        </Route>
        <Route path="/contactos">
          <Contactos />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  
  </React.StrictMode>,
);

