import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import { useState } from 'react';


function NavBar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [changeNavbar, setChangeNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setChangeNavbar(true);
        } else {
            setChangeNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar collapseOnSelect variant={"dark"} expand="lg" className={changeNavbar ? 'color-nav-scroll' : 'color-nav'}>

            <div className="container-fluid">
                <Navbar.Brand href="/" className="logo">
                    <img src='Assets/logo.svg' alt="brand" className="logo-img" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto my-2 my-xxl-0 gap-2 me-3 nav"
                        style={{ maxHeight: '100%', fontSize: '17px' }}
                        responsive-navbar-nav>
                        <Nav.Link className='navbar_link' onClick={() => scrollToSection('home')}>Home</Nav.Link>
                        <Nav.Link className='navbar_link' onClick={() => scrollToSection('about')}>About</Nav.Link>
                        <Nav.Link className='navbar_link' onClick={() => scrollToSection('expertise')}>Expertise</Nav.Link>
                        {/* <Nav.Link className='navbar_link' onClick={() => scrollToSection('community')}>Community</Nav.Link> */}
                        <Nav.Link className='navbar_link' onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;
