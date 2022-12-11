import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Button from 'src/components/button/Button';
import CardContainer from 'src/components/card/CardContainer';
import { setBookingForm } from 'src/features/booking/actions';
import { convertTimeToNumber } from 'src/helpers/date.helpers';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import { generateTimeInDay } from './services/booking.services';
import Calendar from 'react-calendar';
import useSiteUrl from 'src/hooks/useSiteUrl';
import { getAppointmentsOfTech } from 'src/features/technician/actions';
import useBusyTimeDate from 'src/hooks/useBusyTimeDate';

const BookingTime = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const { technician } = useAppSelector((s) => s.technician);
  const dispatch = useAppDispatch();
  const timeWorkings = generateTimeInDay();
  const [date, setDate] = useState<string | undefined>(
    bookingForm?.time ? new Date(bookingForm?.time).toISOString() : undefined
  );
  const site_url = useSiteUrl();
  const busyTimes = useBusyTimeDate({ date, technicianId: bookingForm?.staff?.adminid });

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

  const disabledBusyTime = (date: string) => {
    if (busyTimes) {
      for (let i in busyTimes) {
        const item = busyTimes[i];
        const hourNumbers = dayjs(date).hour() + dayjs(date).minute() / 60;
        return hourNumbers >= item.start_time && hourNumbers <= item.end_time;
      }
    }

    return false;
  };

  useEffect(() => {
    if (site_url && date && bookingForm?.staff?.adminid) {
      dispatch(
        getAppointmentsOfTech({
          site_url,
          date: date.substring(0, 10),
          technicianId: bookingForm.staff.adminid,
        })
      );
    }
  }, [dispatch, date, site_url, bookingForm?.staff?.adminid]);

  return (
    <>
      <div>{JSON.stringify(technician)}</div>
      <CardContainer titleClassName="text-center" title="Choose date time">
        <div className="row row-gap-2">
          <div className="col-12 col-md-5">
            <Calendar
              onChange={(value: Date) => setDate(value.toISOString())}
              value={date ? new Date(date) : null}
              // tileDisabled={({ activeStartDate, date, view }) => {
              //   return dayjs(new Date()).isAfter(date, 'day');
              // }}
            />
          </div>
          {date && (
            <div className="col-12 col-md-7">
              <div className="row row-gap-1">
                <div className="text-center">{dayjs(date).format('DD-MM-YYYY')}</div>
                {timeWorkings.map((time) => (
                  <div key={time.key} className="col-3 col-xl-2">
                    <Button
                      disabled={
                        (dayjs(date).isSame(new Date(), 'day') &&
                          dayjs(date)
                            .hour(Math.floor(time.key))
                            .minute((time.key % 1) * 60)
                            .isBefore(new Date())) ||
                        disabledBusyTime(date)
                      }
                      color={time.key === convertTimeToNumber(new Date(date)) ? 'green' : 'primary'}
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
