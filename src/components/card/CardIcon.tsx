import React from 'react';

type CardIconProps = {
  src?: string;
  children?: React.ReactNode;
};

type StrongTitleProps = {
  children?: React.ReactNode;
};

const StrongTitle: React.FC<StrongTitleProps> = (props) => {
  const { children } = props;
  return <span className="strong-title">{children}</span>;
};

const CardIcon: React.FC<CardIconProps> = (props) => {
  const { src, children } = props;
  return (
    <div className="card-icon">
      <img src={src} alt="icon" />
      <p className="card-icon--title">{children}</p>
    </div>
  );
};

export default Object.assign(CardIcon, { StrongTitle });
