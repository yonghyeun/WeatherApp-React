import { useDispatch } from 'react-redux';
import { FETCHING_AIR } from '../store/actions/actionTypes';

const useDispatchAir = () => {
  const dispatch = useDispatch();

  return (airData) => {
    dispatch({ type: FETCHING_AIR, payload: airData });
  };
};

export default useDispatchAir;
