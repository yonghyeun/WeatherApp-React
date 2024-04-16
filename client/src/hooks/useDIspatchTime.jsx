import { useDispatch } from 'react-redux';
import { CHANGE_TIME } from '../store/actions/actionTypes';
const useDispatchTime = () => {
  const dispatch = useDispatch();

  return (e) => {
    dispatch({ type: CHANGE_TIME, payload: e.target.value });
  };
};

export default useDispatchTime;
