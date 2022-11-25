import dayjs from 'dayjs';

export const convertTimeToNumber = (date?: Date) => {
  return date ? dayjs(date).hour() + dayjs(date).minute() / 60 : undefined;
};
