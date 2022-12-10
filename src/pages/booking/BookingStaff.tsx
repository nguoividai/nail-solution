import React, { useEffect } from 'react';
import CardContainer from 'src/components/card/CardContainer';
import CardTechnician from 'src/components/card/CardTechnician';
import avatar from 'src/assets/images/staff.png';
import Button from 'src/components/button/Button';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import { setBookingForm } from 'src/features/booking/actions';
import { getTechnicians } from 'src/features/technician/actions';
import useSiteUrl from 'src/hooks/useSiteUrl';
import { Technician } from 'src/features/technician/types';
import { Spinner } from 'react-bootstrap';

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
  const { bookingForm } = useAppSelector((s) => s.booking);
  const { technicians, ui } = useAppSelector((s) => s.technician);
  const { loading } = ui || {};
  const dispatch = useAppDispatch();
  const site_url = useSiteUrl();

  const setStaff = (staff: Technician) => {
    dispatch(setBookingForm({ staff, step: 1 }));
  };

  useEffect(() => {
    if (!technicians && site_url) {
      dispatch(getTechnicians({ site_url }));
    }
  }, [dispatch, site_url, technicians]);

  return (
    <>
      <CardContainer titleClassName="text-center" title="Choose staff">
        {loading && (
          <div className="d-flex align-items-center gap-3 mt-3 mb-3">
            <Spinner animation="grow" variant="primary" /> Loading...
          </div>
        )}
        <div className="row row-gap-2">
          {technicians?.map((employee) => (
            <div key={employee.adminid} className="col-md-6">
              <CardTechnician
                avatar={employee.avatar || avatar}
                name={employee.name}
                description={employee.type}
                action={
                  <div className="text-right">
                    <Button color="primary" onClick={() => setStaff(employee)}>
                      Book me
                    </Button>
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
