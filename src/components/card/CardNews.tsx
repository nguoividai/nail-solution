import React from 'react';

type CardNewsProps = {
  src?: string;
  title?: string;
  description?: string;
};

const CardNews: React.FC<CardNewsProps> = (props) => {
  const { src, title, description } = props;
  return (
    <div className="card-news">
      <div className="card-news--image">
        <img src={src} alt="v1hub-img" />
      </div>
      <div className="card-news--content">
        <div className="card-news--title">{title}</div>
        <div className="card-news--description">{description}</div>
      </div>
    </div>
  );
};

export default React.memo(CardNews);
