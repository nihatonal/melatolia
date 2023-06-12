import React from 'react';

import Hero from './hero/Hero'

import './Main.css'
function Main(props) {
    return (
        <div>
            <section className="section section_hero">
                <Hero />
            </section>

        </div>
    );
}

export default Main;