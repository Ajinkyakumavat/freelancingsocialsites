import React, { useState } from 'react';
import Topbar from './Topbar/Topbar.jsx';
import Intro from './Intro/Intro.jsx';
import Portfolio from './PortFolio/Portfolio.jsx';
import Works from './works/Works.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Contact from './contact/Contact.jsx';
import Menu from './Menu/Menu.jsx';
import './App.scss';


const App = () => {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className='app'>
        <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <div className='sections'>
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App