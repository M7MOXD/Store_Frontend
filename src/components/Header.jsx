import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Header() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 text-dark" to="/">THE STORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active text-dark" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/contact">Contacts</NavLink>
                    </li>
                </ul>
                <div className="buttons">
                    <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> Login</NavLink>

                    <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                    
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Cart</NavLink>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
