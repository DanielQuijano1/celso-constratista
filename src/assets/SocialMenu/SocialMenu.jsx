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
                    <SocialIcon url="https://www.facebook.com" />
                    <SocialIcon url="https://www.instagram.com/celsodamiansolis/" />
                    
                    <SocialIcon url="https://api.whatsapp.com/+5491178310579" />
                    
                </div>
            )}
        </div>
    );
};

export default SocialMediaButton;
