import useWeatherState from '../../../../../hooks/useWeatherState';
import { FlexColumn } from '../../../../UI/Flex/Flex';
import Card from '../../Card';
const MainCardSide = (props) => {
  const fetchedWeather = useWeatherState();
  const dateArr = Object.keys(fetchedWeather).slice(0, 3); // 마지막 일은 제외하고 가져오기

  return (
    <section style={{ ...props }}>
      <FlexColumn flexRatio={[0.3, 0.3, 0.3]}>
        {dateArr.map((date) => (
          <Card.SubCard date={date} />
        ))}
      </FlexColumn>
    </section>
  );
};

export default MainCardSide;
