import React from 'react'
import "./css/navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="home" className="title">Yemen Malnutrition</a>
                <ul className="nav-list">
                    <li><a href="home" className='nav-list-item'>About Us</a></li>
                    <li><a href="donate" className='nav-list-item'>Donate</a></li>
                    <li><a href="info" className='nav-list-item'>Learn More</a></li>
                    <li><a href="contact" className='nav-list-item'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar