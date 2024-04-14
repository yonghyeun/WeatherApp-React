import { useDispatch } from 'react-redux';
import { FETCHING_WEATHERTEXT } from '../store/actions/actionTypes';

const useDispatchWeatherText = () => {
  const dispatch = useDispatch();

  return (weatherText) => {
    dispatch({ type: FETCHING_WEATHERTEXT, payload: weatherText });
  };
};

export default useDispatchWeatherText;
