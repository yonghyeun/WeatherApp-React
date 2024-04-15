import { useDispatch } from 'react-redux';
import { FETCHING_AIRTEXT } from '../store/actions/actionTypes';

const useDispatchAirText = () => {
  const dispatch = useDispatch();

  return (airText) => {
    dispatch({ type: FETCHING_AIRTEXT, payload: airText });
  };
};

export default useDispatchAirText;
