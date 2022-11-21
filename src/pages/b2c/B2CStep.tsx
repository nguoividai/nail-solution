import React from 'react';

const B2CStep = () => {
  return (
    <div className="booking-info">
      <ul className="clearfix">
        <li className="step_info_item active">
          <a href="#book/count/1/">
            <div className="content">
              <div className="title-small">Staff</div>
              <div className="title-sub"></div>
            </div>
          </a>
        </li>

        <li className="step_info_item">
          <a href="#book/count/1/">
            <div className="content">
              <div className="title-small">Service</div>
              <div className="title-sub"></div>
            </div>
          </a>
        </li>

        <li className="step_info_item">
          <a href="#book/count/1/">
            <div className="content">
              <div className="title-small">Time</div>
              <div className="title-sub"></div>
            </div>
          </a>
        </li>

        <li className="step_info_item">
          <a href="#book/count/1/">
            <div className="content">
              <div className="title-small">Confirm</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(B2CStep);
