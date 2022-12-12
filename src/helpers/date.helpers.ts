import dayjs from 'dayjs';

export const convertTimeToNumber = (date?: Date) => {
  return date ? dayjs(date).hour() + dayjs(date).minute() / 60 : undefined;
};

export const timeToDecimal = (t: string) => {
  const arr = t.split(':');
  const [hour, minute, second] = arr;

  if (!(Number.isNaN(+hour) && Number.isNaN(+minute) && Number.isNaN(+second))) {
    return +(+hour + +minute / 60 + +second / 60).toFixed(2);
  }

  return 0;
};
