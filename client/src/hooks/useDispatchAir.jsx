import { useDispatch } from 'react-redux';
import { FETCHING_LOCATION } from '../store/actions/actionTypes';

const useDispatchAir = () => {
  const dispatch = useDispatch();

  return (airData) => {
    dispatch({ type: FETCHING_LOCATION, payload: airData });
  };
};

export default useDispatchAir;
