import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import CardContainer from 'src/components/card/CardContainer';
import { generateTimeInDay } from './services/booking.services';

const BookingTime = () => {
  const timeWorkings = generateTimeInDay();
  const [date, setDate] = useState<string | undefined>();

  return (
    <>
      <CardContainer titleClassName="text-center" title="Choose date time">
        <div className="row row-gap-2">
          <div className="col-12">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="icofont-ui-calendar"></i>
              </InputGroup.Text>
              <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
            </InputGroup>
          </div>
          {date && (
            <div className="col-12">
              <div className="row row-gap-1">
                {timeWorkings.map((time) => (
                  <div key={time.key} className="col-3 col-xl-2">
                    <Button color="primary">
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
