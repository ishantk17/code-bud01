import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import bgimg from '../images/web-design-2906159.jpg'
import "../App.css";
function Home() {
  return (
    <div className='HomePage'>
        <div className='hometext'>
          <h1 className='text-light'>Welcome, ISHANT KUMAR</h1>
          <h3 className='h1 text-light'>Stuck in coding?</h3>
          <p className='text-warning'>Get all your doubts related to coding , development , </p><p className='text-dark'>machine learning and many more topics cleared in one place</p>
        <button type="button" class="btn btn-danger"><NavLink className="nav-link text-light"  to="/signup">Get Started</NavLink></button>
        </div>
        
    </div>
  )
}

export default Home