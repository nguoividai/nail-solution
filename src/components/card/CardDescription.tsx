import React from 'react';

type CardDescriptionProps = {
  icon?: string;
  title: string;
  subTitle: string;
};

const CardDescription: React.FC<CardDescriptionProps> = (props) => {
  const { icon, title, subTitle } = props;

  return (
    <div className="card-description">
      <i className={icon}></i>
      <div className="card-description--content">
        <div className="card-description--title">{title}</div>
        <div className="card-description--subtitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default React.memo(CardDescription);
