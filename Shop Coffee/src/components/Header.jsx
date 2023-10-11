import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from '../../public/image/logo.png'
import Home from './Home'
import Products from './Products'


export default function Header() {
  return (
    <BrowserRouter>
        <header>
        <div className="row">
                    <div className="col-12 col-md-4 col-sm-6">
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

                    <div className="col-12 col-md-4 col-sm-6">
                        <div className="container-logo">
                        <img src={logo}  alt="logo" />						
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-sm-6">
                        <div className="container-user my-4">
                            <i className="fa-solid fa-user"></i>
                            <i className="fa-solid fa-basket-shopping"></i>						
                        </div>
                    </div>
                </div>
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-nav">
                        <div className="container-fluid">
                         <Link to='/' className="navbar-brand">Villa Cafe</Link>
                            <button className="navbar-toggler icnbut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link nav-txt" aria-current="page" >Inicio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/products' className="nav-link nav-txt" >Productos</Link>                                        
                                    </li>                                                      
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
        </header>
           
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>       
        </Routes>
    </BrowserRouter>
  )
}
