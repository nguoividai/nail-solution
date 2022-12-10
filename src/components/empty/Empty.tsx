import React from 'react';

const Empty = () => {
  return (
    <>
      <div
        className="empty"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.5rem',
        }}
      >
        <i className="icofont-bill-alt" style={{ fontSize: 128, color: '#efefef' }}></i>
      </div>
    </>
  );
};

export default React.memo(Empty);
