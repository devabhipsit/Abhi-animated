import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home'
import About from './About'
import Service from './Service'
import ContactUs from './ContactUs'
import Navbar from './Navbar';
import "./index.css"
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About}/>
        <Route path='/service' Component={Service}/>
        <Route path='/contact us' Component={ContactUs}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  )
}
