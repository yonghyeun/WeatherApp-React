import { useSelector } from 'react-redux';

const useTimeState = () => {
  return useSelector((state) => state.date);
};

export default useTimeState;
