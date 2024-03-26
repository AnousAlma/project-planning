import React from 'react'
import "./css/navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="title">Yemen Malnutrition</a>
                <ul className="nav-list">
                    <li><a href="google.com" className='nav-list-item'>About Us</a></li>
                    <li><a href="google.com" className='nav-list-item'>Donate</a></li>
                    <li><a href="google.com" className='nav-list-item'>Learn More</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar