import "./../../App.css"
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { SocialIcon } from 'react-social-icons';



const SocialMediaButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="social-media-button">
            <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <BsThreeDotsVertical className="dotsMenu"/>
            </button>
            {isOpen && (
                <div className="social-media-menu">
                    <a href="https://www.facebook.com" target="blank" className="social-icon"><div className="popup__icon facebook animacionActive "/></a>
                    <a href="https://www.instagram.com/celsodamiansolis/" target="blank" className="social-icon"><div className="popup__icon instagram animacionActive "/></a>
                    <a href="https://wa.me/+5491178310579" target="blank" className="social-icon"><div className="popup__icon whatsapp animacionActive "/></a>
                    
                </div>
            )}
        </div>
    );
};

export default SocialMediaButton;
