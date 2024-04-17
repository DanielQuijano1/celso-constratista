// src/App.js
import React, { useState } from 'react';
import SocialMenu from './SocialMenu.jsx';
import "./../../App.css"

const Popup = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="App">
            <button className="menu-button" onClick={toggleMenu}>
                <span>→</span>
            </button>
            {showMenu && <SocialMenu />}
        </div>
    );
};

export default Popup;
