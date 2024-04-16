import { useSelector } from 'react-redux';

const useLocation = () => {
  const { fetchedLocation } = useSelector((state) => state.data);
  return fetchedLocation;
};

export default useLocation;
