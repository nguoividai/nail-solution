import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import CardContainer from 'src/components/card/CardContainer';
import { setBookingForm } from 'src/features/booking/actions';
import { convertTimeToNumber } from 'src/helpers/date.helpers';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import { generateTimeInDay } from './services/booking.services';

const BookingTime = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const dispatch = useAppDispatch();
  const timeWorkings = generateTimeInDay();
  const [date, setDate] = useState<string | undefined>(
    bookingForm?.time ? new Date(bookingForm?.time).toISOString() : undefined
  );

  const setDateTime = (decimal: number) => {
    dispatch(
      setBookingForm({
        step: 3,
        time: dayjs(date)
          .hour(Math.floor(decimal))
          .minute((decimal % 1) * 60)
          .toISOString(),
      })
    );
  };

  return (
    <>
      <CardContainer titleClassName="text-center" title="Choose date time">
        <div className="row row-gap-2">
          <div className="col-12">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="icofont-ui-calendar"></i>
              </InputGroup.Text>

              <Form.Control
                style={{ maxWidth: 150 }}
                type="date"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={date ? new Date(date).toISOString().substring(0, 10) : undefined}
              />
            </InputGroup>
          </div>
          {date && (
            <div className="col-12">
              <div className="row row-gap-1">
                {timeWorkings.map((time) => (
                  <div key={time.key} className="col-3 col-xl-2">
                    <Button
                      color={
                        time.key === convertTimeToNumber(new Date(date))
                          ? 'green'
                          : time.key < 12
                          ? 'primary'
                          : undefined
                      }
                      onClick={() => setDateTime(time.key)}
                    >
                      <i className="icofont-ui-clock"></i> {time.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(BookingTime);
