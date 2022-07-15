import React from 'react'
import '../App.css'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import videocall from '../images/videocall.png'
import "../App.css";
function Navbar() {
  return (
    
    <nav className="navbar sticky-top navbar-expand-lg fixed-top  navbar-light bg-light ">
    <div className="container-fluid">
      <div className="navbar-brand mb-0 h1 brandCss">
        <img src={videocall} alt="" width="34" height="34" class="d-inline-block align-text-top"/>
      <span className="navbar-brand mb-0 h1 brandCss text-warning">Code<span className="navbar-brand mb-0 h1 brandCss">Bud</span></span>
      </div>
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/signup">Registration</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
  )
}

export default Navbar