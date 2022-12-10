import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import empty from 'src/assets/images/empty.png';
import Empty from 'src/components/empty/Empty';
import CardContainer from 'src/components/card/CardContainer';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import { setBookingForm } from 'src/features/booking/actions';
import { Service } from 'src/features/services/types';
import { getServices } from 'src/features/services/actions';
import useSiteUrl from 'src/hooks/useSiteUrl';

const services: Service[] = [
  {
    serviceid: 1,
    servicename: 'DIP NAILS',
  },
  {
    serviceid: 2,
    servicename: 'GEL POLISH',
  },
  {
    serviceid: 3,
    servicename: 'MANICURE',
  },
  {
    serviceid: 4,
    servicename: 'MANICURE GEL',
  },
  {
    serviceid: 5,
    servicename: 'NAIL FILL',
  },
  {
    serviceid: 6,
    servicename: 'NAIL FULLSET',
  },
  {
    serviceid: 7,
    servicename: 'PEDICURE',
  },
  {
    serviceid: 8,
    servicename: 'WAXING',
  },
  {
    serviceid: 9,
    servicename: 'X.OTHER SERVICES',
  },
];

const ServiceChoose = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const { services } = useAppSelector((s) => s.service);
  const [currentServices, setCurrentServices] = useState<Service[]>(services || []);
  const [chooseServices, setChooseServices] = useState<Service[]>([]);
  const dispatch = useAppDispatch();
  const site_url = useSiteUrl();

  const handleChooseItem = (item: Service) => {
    setChooseServices((prev) => [item, ...prev]);
    setCurrentServices((prev) => prev?.filter((e) => e.serviceid !== item.serviceid));
  };

  const handleRemoveChooseItem = (item: Service) => {
    setCurrentServices((prev) => [item, ...prev]);
    setChooseServices((prev) => prev?.filter((e) => e.serviceid !== item.serviceid));
  };

  const setServices = () => {
    dispatch(setBookingForm({ services: chooseServices, step: 2 }));
  };

  useEffect(() => {
    if (!services && site_url) {
      dispatch(getServices({ site_url }));
    }
  }, [site_url, services, dispatch]);

  useEffect(() => {
    if (services && services?.length > 0) {
      setCurrentServices([...services]);
    }
  }, [services]);

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
                    <ListGroup.Item key={choose.serviceid}>
                      {choose.servicename}
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
                <div
                  style={{
                    overflow: 'auto',
                    maxHeight: 400,
                  }}
                >
                  {currentServices.map((service) => (
                    <ListGroup.Item key={service.serviceid}>
                      <div className="service-item">
                        <div className="service-item--name">{service.servicename}</div>
                        <div className="service-item--action">
                          <Button
                            size="sm"
                            color="primary"
                            onClick={() => handleChooseItem(service)}
                          >
                            <i className="icofont-plus"></i> Add
                          </Button>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </div>
              </ListGroup>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(ServiceChoose);
