import React from 'react';
import { useState } from 'react';
import "./../../App.css"

const SocialMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`social-media-menu ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleMenu}>
                <span className="arrow-icon"></span>
            </button>
            <ul className="social-icons">
                {/* Agrega tus íconos de redes sociales aquí */}
                <li><a href="#"><img src="facebook-icon.png" alt="Facebook" /></a></li>
                <li><a href="#"><img src="twitter-icon.png" alt="Twitter" /></a></li>
                {/* ...otros íconos... */}
            </ul>
        </div>
    );
};


export default SocialMenu;
