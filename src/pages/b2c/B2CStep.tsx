import React from 'react';
import Step from 'src/components/step/Step';
import BookingStaff from '../booking/BookingStaff';
import BookingTime from '../booking/BookingTime';
import ServiceChoose from '../booking/ServiceChoose';

const B2CStep = () => {
  return (
    <>
      <Step>
        <Step.Pane name="staff" title="Staff" sub="(Nancy)" active>
          <BookingStaff />
        </Step.Pane>
        <Step.Pane name="service" title="Service" active>
          <ServiceChoose />
        </Step.Pane>
        <Step.Pane name="time" title="Time">
          <BookingTime />
        </Step.Pane>
        <Step.Pane name="confirm" title="Confirm">
          Day la noi dung Confirm
        </Step.Pane>
      </Step>
    </>
  );
};

export default React.memo(B2CStep);
