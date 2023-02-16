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
import PageLoading from 'src/components/loading/PageLoading';

const BookingTime = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  const { technician, ui } = useAppSelector((s) => s.technician);
  const { loading } = ui || {};
  const dispatch = useAppDispatch();
  const timeWorkings = generateTimeInDay();
  const [date, setDate] = useState<string | undefined>(
    bookingForm?.time ? new Date(bookingForm?.time).toISOString() : undefined
  );
  const { auth } = useAppSelector((s) => s.authentication);
  const { url, api_token } = auth || {};
  const busyTimes = useBusyTimeDate({
    date: dayjs(date).format('YYYY-MM-DD'),
    technicianId: bookingForm?.staff?.adminid,
  });

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

  const disabledBusyTime = (time: number) => {
    if (busyTimes) {
      for (let i in busyTimes) {
        const item = busyTimes[i];
        return time >= item.start_time && time < item.end_time;
      }
    }

    return false;
  };

  useEffect(() => {
    if (url && api_token && date && bookingForm?.staff?.adminid) {
      dispatch(
        getAppointmentsOfTech({
          url,
          api_token,
          date: dayjs(date).format('YYYY-MM-DD'),
          technicianId: bookingForm.staff.adminid,
        })
      );
    }
  }, [dispatch, date, url, api_token, bookingForm?.staff?.adminid]);

  return (
    <>
      <PageLoading loading={loading} />
      <CardContainer titleClassName="text-center" title="Choose date time">
        <div className="row row-gap-2">
          <div className="col-12 col-md-5">
            <Calendar
              onChange={(value: Date) => setDate(value.toISOString())}
              value={date ? new Date(date) : null}
              tileDisabled={({ activeStartDate, date, view }) => {
                return dayjs(new Date()).isAfter(date, 'day');
              }}
            />
          </div>
          {date && (
            <div className="col-12 col-md-7">
              <div className="row row-gap-1">
                <div className="text-center">{dayjs(date).format('DD-MM-YYYY')}</div>
                <div className="d-flex gap-5 justify-content-center p-2 mb-3 mt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="dot disabled"></span> Unavailable
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="dot active"></span> Available
                  </div>
                </div>
                {timeWorkings.map((time) => (
                  <div key={time.key} className="col-3 col-xl-2">
                    <Button
                      className="p-3"
                      disabled={
                        (dayjs(date).isSame(new Date(), 'day') &&
                          dayjs(date)
                            .hour(Math.floor(time.key))
                            .minute((time.key % 1) * 60)
                            .isBefore(new Date())) ||
                        disabledBusyTime(time.key)
                      }
                      color={time.key === convertTimeToNumber(new Date(date)) ? 'green' : 'primary'}
                      onClick={() => setDateTime(time.key)}
                    >
                      <i className="icofont-ui-clock d-block"></i> {time.name}
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
