import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import empty from 'src/assets/images/empty.png';
import Empty from 'src/components/empty/Empty';
import CardContainer from 'src/components/card/CardContainer';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import { setBookingForm } from 'src/features/booking/actions';

type Service = {
  id: number;
  name: string;
};

const services: Service[] = [
  {
    id: 1,
    name: 'DIP NAILS',
  },
  {
    id: 2,
    name: 'GEL POLISH',
  },
  {
    id: 3,
    name: 'MANICURE',
  },
  {
    id: 4,
    name: 'MANICURE GEL',
  },
  {
    id: 5,
    name: 'NAIL FILL',
  },
  {
    id: 6,
    name: 'NAIL FULLSET',
  },
  {
    id: 7,
    name: 'PEDICURE',
  },
  {
    id: 8,
    name: 'WAXING',
  },
  {
    id: 9,
    name: 'X.OTHER SERVICES',
  },
];

const ServiceChoose = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const [currentServices, setCurrentServices] = useState<Service[]>(services);
  const [chooseServices, setChooseServices] = useState<Service[]>([]);
  const dispatch = useAppDispatch();

  const handleChooseItem = (item: Service) => {
    setChooseServices((prev) => [item, ...prev]);
    setCurrentServices((prev) => prev?.filter((e) => e.id !== item.id));
  };

  const handleRemoveChooseItem = (item: Service) => {
    setCurrentServices((prev) => [item, ...prev]);
    setChooseServices((prev) => prev?.filter((e) => e.id !== item.id));
  };

  const setServices = () => {
    dispatch(setBookingForm({ services: chooseServices, step: 2 }));
  };

  useEffect(() => {
    if (bookingForm?.services && bookingForm?.services?.length > 0) {
      setChooseServices([]);
      for (let i in bookingForm.services) {
        handleChooseItem(bookingForm.services[+i]);
      }
    }
  }, [bookingForm?.services]);

  return (
    <>
      <CardContainer>
        <div className="p-2">
          <div className="row row-gap-2">
            <div className="col-md-6">
              <ListGroup className="box-shadow" variant="flush">
                <ListGroup.Item
                  as="li"
                  active
                  style={{
                    background: '#16A34A',
                    borderColor: '#16A34A',
                  }}
                >
                  Service choose
                </ListGroup.Item>
                {chooseServices &&
                  chooseServices?.map((choose) => (
                    <ListGroup.Item key={choose.id}>
                      {choose.name}
                      <span className="float-right">
                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => handleRemoveChooseItem(choose)}
                        >
                          <i className="icofont-delete"></i>
                        </Button>
                      </span>
                    </ListGroup.Item>
                  ))}

                {(!chooseServices || !chooseServices?.length) && <Empty />}
                <ListGroup.Item
                  className="d-flex align-items-center"
                  style={{
                    background: '#eee',
                    fontSize: '0.9rem',
                    justifyContent: 'space-between',
                  }}
                >
                  Total: {chooseServices?.length || 0}
                  <span>
                    <Button size="sm" color="primary" onClick={setServices}>
                      Save <i className="icofont-thin-double-right"></i>
                    </Button>
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-md-6">
              <ListGroup className="box-shadow" variant="flush">
                <ListGroup.Item as="li" active>
                  Service
                </ListGroup.Item>
                {currentServices.map((service) => (
                  <ListGroup.Item key={service.id}>
                    {service.name}

                    <span className="float-right">
                      <Button size="sm" color="primary" onClick={() => handleChooseItem(service)}>
                        <i className="icofont-plus"></i> Add
                      </Button>
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(ServiceChoose);
