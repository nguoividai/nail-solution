import React from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import CardContainer from 'src/components/card/CardContainer';

const BookingConfirm = () => {
  return (
    <>
      <CardContainer titleClassName="text-center" title="Confirm">
        <div className="row">
          <div className="col-12 col-md-5">
            <ListGroup className="booking-confirm-list box-shadow" variant="flush">
              <ListGroup.Item>Your booking</ListGroup.Item>
              <ListGroup.Item>
                Date: <strong>Tuesday Nov-29-2022 12:30 PM </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Tech: <strong>Nancy</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Services: <strong>NAIL FULLSET, DIP FULLSET</strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-12 col-md-7">
            <Card>
              <Card.Body>
                <Card.Title>Confirmation Form</Card.Title>
                <Form>
                  <Form.Group className="mt-3 mb-3">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" as="textarea" rows={5} placeholder="Add your note" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" style={{ gap: '1rem' }}>
                    <Form.Check type="checkbox" />
                    <p style={{ fontSize: '0.85rem' }}>
                      By checking the box and clicking submit, you give NailSolution and TIFFANY
                      NAILS & SPA express written consent to contact you at the number provided for
                      any feedback, reminder, confirmation or promotional purposes. Consent is not
                      required to make a purchase. Reply STOP to stop receiving text messages
                    </p>
                  </Form.Group>
                  <Form.Group className="text-right">
                    <Button className="m-2" variant="link">
                      Back
                    </Button>
                    <Button>
                      <i className="icofont-check"></i> Submit
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>{' '}
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(BookingConfirm);
