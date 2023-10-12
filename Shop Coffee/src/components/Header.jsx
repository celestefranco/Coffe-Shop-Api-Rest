import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from '../../public/image/logo.png';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import UserProfile from './UserProfile';


export default function Header() {
  const user = localStorage.getItem('user'); // Obtén el usuario del almacenamiento local

  return (
    <BrowserRouter>
      <header>
        <div className="row">
          <div className="col-12 col-md-3 col-sm-6">
            <div className="container hero">
              <div className="whats-icon">
                <i className="fa-brands fa-whatsapp"></i>
                <div className="content-whats-icon">
                  <span className="text">Haz tus pedidos</span>
                  <span className="number">7805-2886</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-sm-6">
            <div className="container-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="col-12 col-md-4 col-sm-6">
            <div className="container-user my-4">
              {user ? (
                <Link to="/profile">
                  <i className="fa-solid fa-user"></i>
                </Link>
              ) : (
                <Link to="/login">
                  <i className="fa-solid fa-user"></i>
                </Link>
              )}
              <i className="fa-solid fa-basket-shopping"></i>
             
              <Link to="/logout">
                <i className="fa-solid fa-square-xmark"></i>
            </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                Villa Cafe
              </Link>
              <button
                className="navbar-toggler icnbut"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link nav-txt" aria-current="page">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link nav-txt">
                      Productos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<UserProfile />} /> 
        <Route path="/register" element={<Register />} />             
      </Routes>
    </BrowserRouter>
  );
}
