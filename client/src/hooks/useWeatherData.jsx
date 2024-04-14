import { useSelector } from 'react-redux';

const useWeatherData = () => {
  const { status } = useSelector((state) => state.data);
  return status;
};

export default useWeatherData;
