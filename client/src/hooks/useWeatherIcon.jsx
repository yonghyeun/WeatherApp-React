import { FaTemperatureHigh } from 'react-icons/fa'; // temp
import { IoIosRainy } from 'react-icons/io'; // precipitaion
import { TiWeatherWindyCloudy } from 'react-icons/ti'; // wind spped
import { FaHandHoldingWater } from 'react-icons/fa';
import { RiWaterPercentFill } from 'react-icons/ri'; // probability

const useWeatherIcon = (key) => {
  switch (key) {
    case 'temperature':
      return <FaTemperatureHigh />;
    case 'precipitationProbability':
      return <RiWaterPercentFill />;
    case 'oneHourPrecipitation':
      return <IoIosRainy />;
    case 'windSpeed':
      return <TiWeatherWindyCloudy />;
    case 'humidity':
      return <FaHandHoldingWater />;
    default:
      // throw new Error('해당 icon이 존재하지다않습니다');
      return 'good';
  }
};

export default useWeatherIcon;
