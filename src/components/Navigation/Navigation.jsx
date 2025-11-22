import React, { useState } from 'react';
import './Navigation.scss';
const logoImage = new URL('../../assets/watch-shorts-london-white-text.png', import.meta.url).href

function Navigation({sections}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const scrollToSection = (sectionName) => {
        if(sections[sectionName] && sections[sectionName].current) {
            sections[sectionName].current.scrollIntoView({
                behavior: 'smooth'
            })
            setMenuOpen(false)
        }
    }

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="logo" onClick={() => scrollToSection('home')}>
                    <img src={logoImage} alt="Watch Short Logo" />
                </div>

                <div className="right-group">
                    <div className="socialIcons">
                        <a href="#" target="_blank" rel="noopener noreferrer">F</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">IG</a>
                    </div>

                    <button className="burger-button" onClick={toggleMenu}>
                        <div className={`burger ${menuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <button onClick={() => scrollToSection('home')}>Home</button>
                    <button onClick={() => scrollToSection('about')}>About</button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;