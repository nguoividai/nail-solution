import React from 'react';

type CardStatisticProps = {
  src?: string;
  title?: string;
  description?: string;
};

const CardStatistic: React.FC<CardStatisticProps> = (props) => {
  const { src, title, description } = props;
  return (
    <div className="card-statistic">
      <div className="card-statistic--image">
        {src ? <img alt="statistic-img" src={src} /> : null}
      </div>
      <div className="card-statistic--content">
        <div className="card-statistic--title">{title}</div>
        <div className="card-statistic--description">{description}</div>
      </div>
    </div>
  );
};

export default React.memo(CardStatistic);
