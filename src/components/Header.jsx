import React from 'react'
import logo from '../assets/logo_sg.png'

function Header() {
  return (
    <>
        <header className='header'> 
            <div className='header__text'>
                <div className="text--primary"> Sandeep Gomantak </div>
                <div className="text--secondary"> Fresh Sea Food </div>
                <a href="#" className="btn btn--white btn--animated"> Our Menu ! </a>    
            </div>
            <div className="header__logo"> 
                <img src={logo} alt="logo" className="logo" />
            </div>
        </header>
    </>
  )
}

export default Header
