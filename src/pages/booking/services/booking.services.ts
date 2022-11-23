import dayjs from 'dayjs';

export const generateTimeInDay = () => {
  const hourInDates = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const minuteInHours = [0, 0.25, 0.5, 0.75];
  const closedHour = 18.75;
  const timeInDays = [];

  for (let i in hourInDates) {
    for (let j in minuteInHours) {
      if (+hourInDates[i] + +minuteInHours[j] < closedHour) {
        timeInDays.push({
          key: +hourInDates[i] + +minuteInHours[j],
          name: dayjs()
            .hour(+hourInDates[i])
            .minute(+minuteInHours[j] * 60)
            .format('hh:mm A'),
        });
      }
    }
  }

  return [...timeInDays];
};
