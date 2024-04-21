import { useDispatch } from 'react-redux';
import { CHANGE_DATE } from '../store/actions/actionTypes';
const useDispatchDate = (newDate) => {
  const dispatch = useDispatch();
  return () => {
    dispatch({ type: CHANGE_DATE, payload: newDate });
  };
};

export default useDispatchDate;
