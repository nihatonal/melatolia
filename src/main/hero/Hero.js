import React from 'react';

import { FaRegCheckCircle } from 'react-icons/fa';
import './Hero.css';

function Hero(props) {
    return (
        <div className='hero-container' id='home'>
            <div className="hero_content_wrapper p-15">
                <h1 className="hero_title">6 Piece 100% Turkish Cotton Towel Set</h1>
                <p className="hero_subtitle">2 Bath Towels, 2 Hand Towels, 2 Washcloths, 100% Turkish Cotton Towels for Bathroom, Whit 4 different colors. The sizes are;</p>
                <ul className="hero_list">
                    <li className="hero_list_item"><FaRegCheckCircle />Bath Towel :27” x 54</li>
                    <li className="hero_list_item"><FaRegCheckCircle />Hand Towel: 16” x 28”</li>
                    <li className="hero_list_item"><FaRegCheckCircle />Washclot: 13” x 13</li>
                </ul>
                <div className="hero_image"></div>
            </div>
        </div>
    );
}

export default Hero;