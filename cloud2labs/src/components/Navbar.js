import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

// import Logo from "./Logo";

import './Navbar.css';

function NavBar() {
    const [changeNavbar, setChangeNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80){
            setChangeNavbar(true);
        }else{
            setChangeNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='navbar_con'>
        <Navbar collapseOnSelect  variant={"dark"} expand="lg" className={changeNavbar ? 'color-nav-scroll' : 'color-nav'}>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/> */}
            <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Logo></Logo> */}
                <Nav className="ms-auto my-2 my-xxl-0 gap-2 me-3"
                    style={{ maxHeight: '100%', fontSize: '17px' }}
                    responsive-navbar-nav>
                    <Nav.Link className='navbar_link' onClick={() => scrollToSection('home')}>Home</Nav.Link>
                    <Nav.Link className='navbar_link' onClick={() => scrollToSection('about')}>About</Nav.Link>
                    <Nav.Link className='navbar_link' onClick={() => scrollToSection('expertise')}>Expertise</Nav.Link>
                    <Nav.Link className='navbar_link' onClick={() => scrollToSection('community')}>Community</Nav.Link>
                    <Nav.Link className='navbar_link' onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default NavBar;
