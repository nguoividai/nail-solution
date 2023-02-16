import dayjs from 'dayjs';
import React from 'react';
import { Alert, Button, Card, Form, ListGroup } from 'react-bootstrap';
import CardContainer from 'src/components/card/CardContainer';
import { setCurrentStep } from 'src/features/booking/actions';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';

const BookingConfirm = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const dispatch = useAppDispatch();

  const changeStep = (step: number) => {
    dispatch(setCurrentStep(step));
  };

  return (
    <>
      <CardContainer titleClassName="text-center" title="Confirm">
        <div className="row row-gap-2">
          <div className="col-12 col-md-5">
            <ListGroup className="booking-confirm-list box-shadow" variant="flush">
              <ListGroup.Item>Your booking</ListGroup.Item>
              <ListGroup.Item>
                Date:{' '}
                <strong>
                  {bookingForm?.time
                    ? dayjs(bookingForm.time).format('dddd, MMMM D, YYYY h:mm A')
                    : ''}
                </strong>
                <Button
                  style={{ fontSize: '0.75rem', float: 'right' }}
                  variant="link"
                  onClick={() => changeStep(2)}
                >
                  Change
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                Tech: <strong>{bookingForm?.staff?.name}</strong>
                <Button
                  style={{ fontSize: '0.75rem', float: 'right' }}
                  variant="link"
                  onClick={() => changeStep(0)}
                >
                  Change
                </Button>
              </ListGroup.Item>
              {bookingForm?.services && bookingForm?.services?.length > 0 && (
                <ListGroup.Item>
                  Services:{' '}
                  <strong>
                    {bookingForm?.services &&
                      bookingForm?.services?.length > 0 &&
                      bookingForm.services.map((e) => e.servicename).join(', ')}
                  </strong>
                  <Button
                    style={{ fontSize: '0.75rem', float: 'right' }}
                    variant="link"
                    onClick={() => changeStep(1)}
                  >
                    Change
                  </Button>
                </ListGroup.Item>
              )}
              {!bookingForm?.services ||
                (!bookingForm?.services?.length && (
                  <ListGroup.Item>
                    <Alert variant="danger">Please choose services</Alert>
                    <Button
                      style={{ fontSize: '0.75rem', float: 'right' }}
                      variant="link"
                      onClick={() => changeStep(1)}
                    >
                      Change
                    </Button>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>
          <div className="col-12 col-md-7">
            <Card>
              <Card.Body>
                <Card.Title>Confirmation Form</Card.Title>
                <Form>
                  <Form.Group className="mt-3 mb-3">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Note <small className="text-secondary">(Optional)</small>
                    </Form.Label>
                    <Form.Control type="text" as="textarea" rows={5} placeholder="Add your note" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" style={{ gap: '1rem' }}>
                    <Form.Check type="checkbox" required />
                    <p style={{ fontSize: '0.85rem' }}>
                      By checking the box and clicking submit, you give NailSolution and TIFFANY
                      NAILS & SPA express written consent to contact you at the number provided for
                      any feedback, reminder, confirmation or promotional purposes. Consent is not
                      required to make a purchase. Reply STOP to stop receiving text messages
                    </p>
                  </Form.Group>
                  {bookingForm?.services && bookingForm?.services?.length > 0 && (
                    <Form.Group className="text-right">
                      {/* <Button className="m-2" variant="link">
                      Back
                    </Button> */}
                      <Button type="submit">
                        <i className="icofont-check"></i> Submit
                      </Button>
                    </Form.Group>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(BookingConfirm);
