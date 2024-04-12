import { useDispatch } from 'react-redux';
import { FETCHING_WEATHER } from '../store/actions/actionTypes';

const useDispatchWeather = () => {
  const dispatch = useDispatch();

  return (location) => {
    dispatch({ type: FETCHING_WEATHER, payload: location });
  };
};

export default useDispatchWeather;
