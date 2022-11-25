import dayjs from 'dayjs';
const now = new Date();

export const convertTimeToNumber = (date?: Date) => {
  return date ? dayjs(date).hour() + dayjs(date).minute() / 60 : undefined;
};
