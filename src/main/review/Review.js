import React from 'react';

import ReviewCard from './ReviewCard';

import './Review.css';
function Review(props) {
    
    return (
        <div className="review_container p-15">
            <div className="review_wrapper">
                <div className="review_items_wrapper">
                    <ReviewCard />
                    <ReviewCard />
                </div>

            </div>

        </div>
    );
}

export default Review;