import React from 'react';
import Button from '../button/Button';

type CallActionProps = {
  className?: string;
  heading?: string;
  description?: string;
  src?: string;
  action?: React.ReactNode;
};

const CallAction: React.FC<CallActionProps> = ({
  className,
  heading,
  description,
  src,
  action,
}) => {
  return (
    <div
      className={`call-action--card ${className || ''}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="call-action--text">
        <div className="call-action--heading">{heading}</div>
        <div className="call-action--description">{description}</div>
      </div>
      <div className="call-action--action">{action}</div>
    </div>
  );
};

export default React.memo(CallAction);
