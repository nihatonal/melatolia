import React, { useState, useEffect } from 'react';

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import './RateReview.css'

const RateReview = ({star}) => {
    const [activeStar, setActiveStar] = useState(0);

    useEffect(() => {
        console.log(star)
        setActiveStar(100 - 100 * Number(0 + "." + star.toString().split('.')[1]))
    }, [star])


    return (

        <div className='review_stars_wrapper'>
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <div className='empty_star'>
                <BsStarFill className='review_star'
                    style={{ color: '#eeb524', clipPath: `inset(0 ${activeStar}% 0 0)` }}
                />
                <BsStar className='review_star_empty'
                    style={{ color: '#eeb524' }}
                />
            </div>
        </div>
    );
};
export default RateReview;