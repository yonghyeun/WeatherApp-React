import { useSelector } from 'react-redux';

const useTime = () => {
  const { date, time } = useSelector((state) => state.date);

  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6);
  return { year, month, day, time: Number(time.substring(0, 2)) };
};

export default useTime;
