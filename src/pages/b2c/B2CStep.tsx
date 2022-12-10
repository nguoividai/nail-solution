import dayjs from 'dayjs';
import React, { useCallback, useEffect } from 'react';
import Step from 'src/components/step/Step';
import { setCurrentStep } from 'src/features/booking/actions';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import BookingConfirm from '../booking/BookingConfirm';
import BookingStaff from '../booking/BookingStaff';
import BookingTime from '../booking/BookingTime';
import ServiceChoose from '../booking/ServiceChoose';

const B2CStep = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const dispatch = useAppDispatch();

  const onChangeStep = (currentStep: number) => {
    dispatch(setCurrentStep(currentStep));
  };

  useEffect(() => {
    const element_to_scroll_to = document.querySelector('.booking-step');
    element_to_scroll_to?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // window.scrollBy(0, -100);
  }, [bookingForm?.step]);

  return (
    <>
      <Step
        id="main-step"
        defaultStep={bookingForm?.step || 0}
        disabledFromStep={bookingForm?.maxStep || 0}
        onChangeStep={onChangeStep}
      >
        <Step.Pane
          style={{ width: '25vw' }}
          name="staff"
          title="1. Staff"
          sub={bookingForm?.staff?.name}
          active
        >
          <BookingStaff />
        </Step.Pane>
        <Step.Pane
          style={{ width: '25vw' }}
          name="service"
          title="2. Service"
          sub={(bookingForm?.services?.length || 0) + ' services'}
        >
          <ServiceChoose />
        </Step.Pane>
        <Step.Pane
          style={{ width: '25vw' }}
          name="time"
          title="3. Time"
          sub={bookingForm?.time ? dayjs(bookingForm.time).format('dddd, MMMM D, YYYY h:mm A') : ''}
        >
          <BookingTime />
        </Step.Pane>
        <Step.Pane style={{ width: '25vw' }} name="confirm" title="4. Confirm">
          <BookingConfirm />
        </Step.Pane>
      </Step>
    </>
  );
};

export default React.memo(B2CStep);
