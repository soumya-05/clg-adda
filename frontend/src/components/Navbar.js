import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
    return (
        <div className="header">
            <Link to='/material'>
                <li>Materials</li>
            </Link> 

            <Link to='/alumini'>
                <li>Alumini</li>
            </Link> 
            <Link to='/profile'>
                <li>ProfilePage</li>
            </Link> 
            <Link to='/login'>
                <li>Login</li>
            </Link>   
             
        </div>
    )
}

export default Navbar 
