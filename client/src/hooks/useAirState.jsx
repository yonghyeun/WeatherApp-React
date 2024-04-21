import { useSelector } from 'react-redux';

const useAirState = () => {
  const fetchedAir = useSelector((state) => state.data);
  return fetchedAir;
};

export default useAirState;
