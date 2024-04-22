import { fetchLocationFromString } from '../utils/ApiUtils';
import { getCurrentTime } from '../utils/DateUtils';
import useEveryDispatcher from './useEveryDispatcher';
import useSearchRef from './useSearchRef';

import { useNavigate } from 'react-router-dom';

// 서울특별시 종로구의 위경도
const BASE_LAT = 37.5735042429813;
const BASE_LON = 126.978989954189;

const useHandleClick = () => {
  const inputRef = useSearchRef();
  const navigate = useNavigate();
  const { disptachLocation, disptachStatus } = useEveryDispatcher();

  const { fullDate } = getCurrentTime();

  const searchParams = new URLSearchParams([
    ['date', fullDate],
    ['lat', BASE_LAT],
    ['lon', BASE_LON],
  ]);

  const fetchingLocation = async () => {
    if (!inputRef.current?.value) return null;
    try {
      disptachStatus('LOADING');
      const locationName = inputRef.current.value;
      const { addressName, lat, lon } = await fetchLocationFromString(
        locationName,
      );

      searchParams.set('lat', lat);
      searchParams.set('lon', lon);

      disptachLocation(addressName);
    } catch (e) {
      disptachStatus(e.message);
      console.error(e);
    }
  };

  const navigateToCardPage = () => {
    navigate(`/menu1?${searchParams.toString()}`);
  };

  return { fetchingLocation, navigateToCardPage };
};

export default useHandleClick;
