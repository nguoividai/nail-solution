import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
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
        technician?.[technicianId]?.[date].appointments!.map((e) => ({
          start_time: dayjs(e.start_time).hour() + dayjs(e.start_time).minute() / 60,
          end_time: dayjs(e.end_time).hour() + dayjs(e.end_time).minute() / 60,
        }))
      );
    } else {
      setBusyTimes(null);
    }
  }, [technicianId, date, technician]);

  return busyTimes;
};

export default useBusyTimeDate;
