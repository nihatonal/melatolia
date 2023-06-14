import React from 'react';


import RateReview from '../../shared/UI/RateReview';
import './ReviewCard.css'
function ReviewCard(props) {
    return (

        <div className="review_item">
            <p className="review_item_text">
                "These hand towel are great. I ordered grey. Didn’t fade or have lint. Nice thickness."

            </p>
            <RateReview star={3.5}/>
            <p className='review_item_author'>Sophronia Dalya</p>
        </div>
    );
}

export default ReviewCard;