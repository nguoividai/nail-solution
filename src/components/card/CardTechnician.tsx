import React from 'react';

type CardTechnicianProps = {
  name?: string;
  description?: string;
  action?: React.ReactNode;
  avatar?: string;
};

const CardTechnician: React.FC<CardTechnicianProps> = ({ name, description, action, avatar }) => {
  return (
    <>
      <div className="card-technician">
        <div className="card-technician--avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="card-technician--body">
          <div className="card-technician--name">{name}</div>
          <div className="card-technician--description">{description}</div>
          <div className="card-technician--action">{action}</div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardTechnician);
