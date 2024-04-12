import { useSelector } from 'react-redux';

const useAPIStatus = () => {
  const { status } = useSelector((state) => state.status);
  return status;
};

export default useAPIStatus;
