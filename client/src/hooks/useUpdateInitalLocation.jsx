import useLocation from './useLocation';
import useDispatchLocation from './useDispatchLocation';
import { useEffect } from 'react';
import { fetchLocationFromCoord } from '../utils/ApiUtils';
const useUpdateInitalLocation = () => {
  const { lat, lon } = useLocation();
  const dispatchLocation = useDispatchLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const p_lat = searchParams.get('lat');
    const p_lon = searchParams.get('lon');

    if (!p_lat || !p_lon) return;
    if ((p_lat === lat) & (p_lon === lon)) return;

    const updateInitalLocationState = async () => {
      const initalLocation = await fetchLocationFromCoord(p_lat, p_lon);
      dispatchLocation(initalLocation);
    };
    updateInitalLocationState();
  }, []);
};

export default useUpdateInitalLocation;
