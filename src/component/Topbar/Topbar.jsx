import React from 'react';
import './Topbar.scss';
import { Person, Mail } from '@mui/icons-material';


const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>genius.</a>
          <div className="itemContainer">
          <Person className='Icon'/>
          <span>+91 7263994600</span>            
          </div>
          <div className="itemContainer">
          <Mail className='Icon'/>
          <span>ajink3994@gmail.com</span>            
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;