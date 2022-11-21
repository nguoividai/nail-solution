import React from 'react';

type BadgeProps = {
  children?: React.ReactNode;
  number?: number;
};

const Badge: React.FC<BadgeProps> = ({ children, number }) => {
  return (
    <span className="badge">
      {number && number > 0 ? <sub className="badge-count">{number}</sub> : null}
      {children}
    </span>
  );
};

export default React.memo(Badge);
