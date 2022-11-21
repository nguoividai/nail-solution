import React from 'react';
import Rating from '../rating/Rating';

type CardReviewProps = {
  username: string;
  reviewText: string;
  rate: number;
};

const CardReview: React.FC<CardReviewProps> = (props) => {
  const { username, reviewText, rate } = props;
  return (
    <div className="card-review">
      <div className="header">
        <div className="username">{username}:</div>
        <div className="rating">
          <Rating rating={rate} />
        </div>
      </div>
      <div className="review-content">{reviewText}</div>
    </div>
  );
};

export default CardReview;
