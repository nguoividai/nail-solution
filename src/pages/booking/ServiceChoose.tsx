import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import empty from 'src/assets/images/empty.png';
import Empty from 'src/components/empty/Empty';
import CardContainer from 'src/components/card/CardContainer';

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
  const [currentServices, setCurrentServices] = useState<Service[]>(services);
  const [chooseServices, setChooseServices] = useState<Service[]>([]);

  const handleChooseItem = (item: Service) => {
    setChooseServices((prev) => [item, ...prev]);
    setCurrentServices((prev) => prev?.filter((e) => e.id !== item.id));
  };

  const handleRemoveChooseItem = (item: Service) => {
    setCurrentServices((prev) => [item, ...prev]);
    setChooseServices((prev) => prev?.filter((e) => e.id !== item.id));
  };

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
                  style={{
                    background: '#eee',
                    fontSize: '0.9rem',
                  }}
                >
                  Total: {chooseServices?.length || 0}
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
