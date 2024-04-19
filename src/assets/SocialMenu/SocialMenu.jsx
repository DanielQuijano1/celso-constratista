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

            <div className="popup__box">
                <a href="https://wa.me/+5491178310579" target="blank"><div className="popup__icon whatsapp animacionActive " /></a>
            </div>
        </div>
    );
};


export default SocialMenu;
