import React from 'react'
import {  Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import {  Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes >
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>  
    </div>
  )
}

export default App
