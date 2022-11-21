import React, { useState, useEffect } from 'react';

type RatingProps = {
  rating?: number;
};

const Rating: React.FC<RatingProps> = (props) => {
  const { rating = 0 } = props;

  const [isHaftStar, setIsHaftStar] = useState(false);
  const [starNumber, setStarNumber] = useState(0);

  useEffect(() => {
    if (rating > 0) {
      if (rating % 1 !== 0) {
        setStarNumber(Math.ceil(rating));
        setIsHaftStar(true);
      } else {
        setStarNumber(rating);
        setIsHaftStar(false);
      }
    } else {
      setStarNumber(0);
      setIsHaftStar(false);
    }
  }, [rating]);

  return (
    <div className="rating">
      {Array.from(new Array(starNumber)).map((item, index) => (
        <i
          key={index}
          className={`icofont-star active ${
            index === starNumber - 1 && isHaftStar ? 'haft-star' : ''
          }`}
        ></i>
      ))}
      {Array.from(new Array(5 - starNumber)).map((item, index) => (
        <i key={index} className="icofont-star"></i>
      ))}
    </div>
  );
};

export default Rating;
