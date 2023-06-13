import React from 'react';

import Hero from './hero/Hero'
import AboutUs from './aboutus/AboutUs';
import Features from './features/Features';

import './Main.css'
function Main(props) {
    return (
        <div>

            {/* <section className="section section_hero" id='home'> */}
                <Hero />
            {/* </section> */}
            {/* <section className="section" id='aboutus'> */}
                <AboutUs />
            {/* </section> */}
            {/* <section className="section" id='features'> */}
                <Features />
            {/* </section> */}

        </div>
    );
}

export default Main;