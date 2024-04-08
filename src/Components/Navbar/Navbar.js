import React from 'react'
import './Navbar.css'
function Navbar(props) {
    return (
        <>
            <header className="header">
                <a href="#home" className="logo" onClick={props.menu}>Harsh</a>

                <i className="fa-solid fa-bars" id="menu-icon"></i>

                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#education">Education</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </>
    )
}

export default Navbar
