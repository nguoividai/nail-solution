import React from 'react';

type AlertProps = {
  color?: 'primary';
};

const Alert: React.FC<AlertProps> = ({ color }) => {
  return (
    <div className={`alert ${color}`}>
      <i className="alert-icon icofont-info-circle"></i> With a casein allergy (also referred to as
      a milk even skin all)
    </div>
  );
};

export default React.memo(Alert);
