import React from 'react';
import Step from 'src/components/step/Step';
import BookingStaff from '../booking/BookingStaff';

const B2CStep = () => {
  return (
    <>
      <Step>
        <Step.Pane name="staff" title="Staff" active>
          <BookingStaff />
        </Step.Pane>
        <Step.Pane name="service" title="Service" active>
          Day la noi dung Service
        </Step.Pane>
        <Step.Pane name="time" title="Time">
          Day la noi dung Time
        </Step.Pane>
        <Step.Pane name="confirm" title="Confirm">
          Day la noi dung Confirm
        </Step.Pane>
      </Step>
    </>
  );
};

export default React.memo(B2CStep);
