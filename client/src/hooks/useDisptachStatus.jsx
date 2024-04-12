import { useDispatch } from 'react-redux';
import { API_STATUS } from '../store/actions/actionTypes';

const useDispatchStatus = () => {
  const dispatch = useDispatch();
  return (status) => {
    dispatch({ type: API_STATUS, payload: status });
  };
};

export default useDispatchStatus;
