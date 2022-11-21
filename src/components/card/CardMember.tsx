import React from 'react';

type CardMemberProps = {
  src?: string;
  name?: string;
  position?: string;
};

const CardMember: React.FC<CardMemberProps> = (props) => {
  const { src, name, position } = props;
  return (
    <div className="card-member">
      <div className="card-member--image">
        <img alt="img-member" src={src} />
      </div>
      <div className="card-member--content">
        <div className="card-member--name">{name}</div>
        <div className="card-member--position">{position}</div>
      </div>
    </div>
  );
};

export default React.memo(CardMember);
