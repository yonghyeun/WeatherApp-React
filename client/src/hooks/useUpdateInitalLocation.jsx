import useLocation from './useLocation';
import useDispatchLocation from './useDispatchLocation';
import { useEffect } from 'react';
import { fetchLocationFromCoord } from '../utils/ApiUtils';
const useUpdateInitalLocation = () => {
  const { lat, lon } = useLocation();
  const dispatchLocation = useDispatchLocation();

  useEffect(() => {
    const updateInitalLocationState = async () => {
      const initalLocation = await fetchLocationFromCoord(lat, lon);
      dispatchLocation(initalLocation);
    };
    updateInitalLocationState();
  }, []);
};

export default useUpdateInitalLocation;
