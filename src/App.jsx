import { useState } from 'react'

import { Counter } from './Counter';
import { Button } from 'react-bootstrap';
import AgregarProducts from './agregarProducts';
import ProtectedRoutes from './ProtectedRoutes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contactos from './Contactos';
import Products from './Products';
import Cancel from './Cancel';
import Success from './success';
import Login from './login';
import Registrarse from './Registrarse';
import Dashboard from './Dashboard';
import DetallesProducts from './DetallesProducts';
import ListProduct from './ListProduct';
function App() {
const [isLogin,setIsLogin]=useState(false);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="productos" element={<Products/>}/>
        <Route path="acerca" element={ <About/> } />
        <Route path="contactos" element={ <Contactos /> } />
        <Route path="agregar" element={<AgregarProducts/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="cancel" element={<Cancel/>}/>
        <Route path="listaproductos" element={<ListProduct/>}/>
        <Route path="detalles/:id" element={<DetallesProducts/>}/>
        <Route path="login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
        <Route path="registrarse" element={<Registrarse/>}/>
        <Route element={<ProtectedRoutes isLogin={isLogin} setIsLogin={setIsLogin}/>}>
        <Route path="dashboard" element={<Dashboard setIsLogin={setIsLogin}  />}/>
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
