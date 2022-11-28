import React from 'react';
import { Button } from 'react-bootstrap';
import { setCurrentStep } from 'src/features/booking/actions';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';

type B2CFooterMobileProps = {
  step?: string;
};

const B2CFooterMobile: React.FC<B2CFooterMobileProps> = ({ step }) => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="footer-mobile">
        <div className="back-action">
          {(bookingForm?.step || 0) > 0 && (
            <Button
              variant="link"
              onClick={() => dispatch(setCurrentStep((bookingForm?.step || 0) - 1))}
            >
              <i className="icofont-thin-double-left"></i> Back
            </Button>
          )}
        </div>
        <div className="helper">
          {(bookingForm?.maxStep === 0 || !bookingForm?.maxStep) && <>1. Please choose staff</>}
          {bookingForm?.maxStep === 1 && <>2. Please choose services</>}
          {bookingForm?.maxStep === 2 && <>3. Please choose date and time</>}
          {bookingForm?.maxStep === 3 && <>4. Confirm booking</>}
        </div>
        <div className="next-action">
          {(bookingForm?.maxStep || 0) > (bookingForm?.step || 0) && (
            <Button
              variant="link"
              onClick={() => dispatch(setCurrentStep((bookingForm?.step || 0) + 1))}
            >
              <i className="icofont-thin-double-right"></i> Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(B2CFooterMobile);
