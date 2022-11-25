import dayjs from 'dayjs';
import React from 'react';
import Step from 'src/components/step/Step';
import { useAppSelector } from 'src/types/redux.types';
import BookingConfirm from '../booking/BookingConfirm';
import BookingStaff from '../booking/BookingStaff';
import BookingTime from '../booking/BookingTime';
import ServiceChoose from '../booking/ServiceChoose';

const B2CStep = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);

  return (
    <>
      <Step defaultStep={bookingForm?.step || 0} disabledFromStep={bookingForm?.maxStep || 0}>
        <Step.Pane
          style={{ width: '25vw' }}
          name="staff"
          title="Staff"
          sub={bookingForm?.staff}
          active
        >
          <BookingStaff />
        </Step.Pane>
        <Step.Pane
          style={{ width: '25vw' }}
          name="service"
          title="Service"
          sub={(bookingForm?.services?.length || 0) + ' services'}
        >
          <ServiceChoose />
        </Step.Pane>
        <Step.Pane
          style={{ width: '25vw' }}
          name="time"
          title="Time"
          sub={bookingForm?.time ? dayjs(bookingForm.time).format('dddd, MMMM D, YYYY h:mm A') : ''}
        >
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
