import { useDispatch } from 'react-redux';
import { FETCHING_LOCATION } from '../store/actions/actionTypes';

const useDispatchLocation = () => {
  const dispatch = useDispatch();

  return (location) => {
    dispatch({ type: FETCHING_LOCATION, payload: location });
  };
};

export default useDispatchLocation;
