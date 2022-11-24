import React from 'react';
import Step from 'src/components/step/Step';
import BookingConfirm from '../booking/BookingConfirm';
import BookingStaff from '../booking/BookingStaff';
import BookingTime from '../booking/BookingTime';
import ServiceChoose from '../booking/ServiceChoose';

const B2CStep = () => {
  return (
    <>
      <Step>
        <Step.Pane style={{ width: '25vw' }} name="staff" title="Staff" sub="(Nancy)" active>
          <BookingStaff />
        </Step.Pane>
        <Step.Pane style={{ width: '25vw' }} name="service" title="Service" active>
          <ServiceChoose />
        </Step.Pane>
        <Step.Pane style={{ width: '25vw' }} name="time" title="Time">
          <BookingTime />
        </Step.Pane>
        <Step.Pane style={{ width: '25vw' }} name="confirm" title="Confirm">
          <BookingConfirm />
        </Step.Pane>
      </Step>
    </>
  );
};

export default React.memo(B2CStep);
