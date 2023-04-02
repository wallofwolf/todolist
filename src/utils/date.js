import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY.MM.DD';

export const now = () => {
  const now = dayjs();
  return now.format(DATE_FORMAT);
};
