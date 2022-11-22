import React from 'react';

type CardContainerProps = {
  titleClassName?: string;
  title?: string;
  children?: React.ReactNode;
};

const CardContainer: React.FC<CardContainerProps> = ({ titleClassName, title, children }) => {
  return (
    <>
      <div className="card-container">
        <div className={`card-container--title ${titleClassName || ''}`}>{title}</div>
        <div className="card-container--body">{children}</div>
      </div>
    </>
  );
};

export default React.memo(CardContainer);
