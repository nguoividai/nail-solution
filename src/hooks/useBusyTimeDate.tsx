import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { timeToDecimal } from 'src/helpers/date.helpers';
import { useAppSelector } from 'src/types/redux.types';

type useBusyTimeDateProps = {
  technicianId?: string;
  date?: string;
};

type BusyTime = { start_time: number; end_time: number };

const useBusyTimeDate = (props: useBusyTimeDateProps): BusyTime[] | null => {
  const [busyTimes, setBusyTimes] = useState<BusyTime[] | null>(null);
  const { technicianId, date } = props;
  const { technician } = useAppSelector((s) => s.technician);

  useEffect(() => {
    if (
      date &&
      technicianId &&
      technician?.[technicianId]?.[date]?.appointments &&
      technician?.[technicianId]?.[date]?.appointments!.length > 0
    ) {
      setBusyTimes(
        technician?.[technicianId]?.[date].appointments!.map((e) => {
          return {
            start_time: e.start_time ? timeToDecimal(e.start_time) : 0,
            end_time: e.end_time ? timeToDecimal(e.end_time) : 0,
          };
        })
      );
    } else {
      setBusyTimes(null);
    }
  }, [technicianId, date, technician]);

  return busyTimes;
};

export default useBusyTimeDate;
