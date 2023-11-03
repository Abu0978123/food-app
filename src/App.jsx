import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu'
import PageNotFound from './pages/PageNotFound'

function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/menu' element= {<Menu/>}/>
    <Route path='*' element= {<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
