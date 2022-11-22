import React from 'react';
import CardContainer from 'src/components/card/CardContainer';
import CardTechnician from 'src/components/card/CardTechnician';
import avatar from 'src/assets/images/staff.png';
import Button from 'src/components/button/Button';

const seeders = [
  {
    id: 1,
    name: 'Khoi',
    description: 'Technician',
  },
  {
    id: 2,
    name: 'Nancy',
    description: 'Technician',
  },
  {
    id: 3,

    name: 'Phillip',
    description: 'Technician',
  },
  {
    id: 4,
    name: 'Sophia',
    description: 'Technician',
  },
  {
    id: 5,
    name: 'TY',
    description: 'Technician',
  },
];

const BookingStaff = () => {
  return (
    <>
      <CardContainer titleClassName="text-center" title="Choose staff">
        <div className="row row-gap-2">
          {seeders?.map((employee) => (
            <div key={employee.id} className="col-md-6">
              <CardTechnician
                avatar={avatar}
                name={employee.name}
                description={employee.description}
                action={
                  <div className="text-right">
                    <Button color="primary">Book me</Button>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </CardContainer>
    </>
  );
};

export default React.memo(BookingStaff);
