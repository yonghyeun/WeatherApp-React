import { FaTemperatureHigh } from 'react-icons/fa'; // temp
import { IoIosRainy } from 'react-icons/io'; // precipitaion
import { TiWeatherWindyCloudy } from 'react-icons/ti'; // wind spped
import { FaHandHoldingWater } from 'react-icons/fa';
import { RiWaterPercentFill } from 'react-icons/ri'; // probability

const useWeatherIcon = (key) => {
  switch (key) {
    case '온도':
      return <FaTemperatureHigh />;
    case '강수확률':
      return <RiWaterPercentFill />;
    case '강수량':
      return <IoIosRainy />;
    case '풍속':
      return <TiWeatherWindyCloudy />;
    case '습도':
      return <FaHandHoldingWater />;
    default:
      // throw new Error('해당 icon이 존재하지다않습니다');
      return 'good';
  }
};

export default useWeatherIcon;
