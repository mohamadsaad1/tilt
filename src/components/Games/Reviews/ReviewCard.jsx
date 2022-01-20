import React from "react";
import '../../../styles/DisplayInfo.css'


const ReviewCard = (props) => {

  return ( 
    <div className="review-card">
      <div className="review-container">
        <p>
          {props.review.content}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard