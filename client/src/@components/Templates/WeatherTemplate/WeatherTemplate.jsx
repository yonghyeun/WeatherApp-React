import { FlexColumn, FlexRow } from '../../UI/Flex/Flex';
import WeatherMainCard from '../Cards/WeatherMainCard/WeatherMainCard';
import WeatherSideCard from '../Cards/WeatherMainCard/WeatherSideCard';
import moduleStyle from './WeatherTemplate.module.css';
import useWeatherState from '../../../hooks/useWeatherState';

const WeatherTemplate = () => {
  const fetchedWeather = useWeatherState();
  const toDateArr = Object.keys(fetchedWeather).slice(0, 3);

  // TODO section 에 style module 추가하기
  return (
    <section className={moduleStyle.template}>
      <FlexRow flexRatio={[0.8, 0.2]}>
        <WeatherMainCard />
        <FlexColumn justifyContent='space-between' padding='0px'>
          {toDateArr.map((toDate) => (
            <WeatherSideCard toDate={toDate} key={toDate} />
          ))}
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default WeatherTemplate;
