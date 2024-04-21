import useWeatherState from './useWeatherState';
import DayCloudy from '../assets/weatherImg/day_cloudy.png';
import DayRainySnow from '../assets/weatherImg/day_rainy_snow.png';
import DayRainy from '../assets/weatherImg/day_rainy.png';
import DaySnow from '../assets/weatherImg/day_snow.png';
import DaySunnyCloudy from '../assets/weatherImg/day_sunny_cloudy.png';
import DaySunny from '../assets/weatherImg/day_sunny.png';

import NightCloudy from '../assets/weatherImg/night_cloudy.png';
import NightRainySnow from '../assets/weatherImg/night_rainy_snow.png';
import NightRainy from '../assets/weatherImg/night_rainy.png';
import NightSnow from '../assets/weatherImg/night_snow.png';
import NightSunnyCloudy from '../assets/weatherImg/night_sunny_cloudy.png';
import NightSunny from '../assets/weatherImg/night_sunny.png';

const imgSrcMap = {
  day: {
    sunny: DaySunny,
    cloudy: DayCloudy,
    rainy: DayRainy,
    rainy_snow: DayRainySnow,
    snow: DaySnow,
    sunny_cloudy: DaySunnyCloudy,
  },
  night: {
    sunny: NightSunny,
    cloudy: NightCloudy,
    rainy: NightRainy,
    rainy_snow: NightRainySnow,
    snow: NightSnow,
    sunny_cloudy: NightSunnyCloudy,
  },
};

const useIconSrc = (date, time) => {
  const { skyConditions, precipitationType } = useWeatherState(date, time);
  const nTime = Number(time.substring(0, 2));
  const timePeriod = nTime >= 6 && nTime <= 18 ? 'day' : 'night';
  if (precipitationType === 'sunny') {
    return imgSrcMap[timePeriod][skyConditions];
  }
  return imgSrcMap[timePeriod][precipitationType];
};

export default useIconSrc;
