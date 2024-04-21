import useWeatherState from '../../../../hooks/useWeatherState';
import Card from '../../../Composite/Cards/Card';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../../Composite/Typography/Typography';
import useDispatchDate from '../../../../hooks/useDispatchDate';
const WeatherSideCard = ({ toDate, time = '0900' }) => {
  const fetchedWeather = useWeatherState(toDate);
  const { minTemperature, maxTemperature } = fetchedWeather;
  const month = toDate.substring(4, 6);
  const day = toDate.substring(6);
  const dispatchDate = useDispatchDate(toDate);

  return (
    <Card onClick={dispatchDate}>
      <FlexRow justifyContent='center' alignItems='center'>
        <FlexColumn>
          <Typography.SubTitle>
            {month}.{day}
          </Typography.SubTitle>
          <Typography.MainText>
            {maxTemperature}/{minTemperature}
          </Typography.MainText>
        </FlexColumn>
        <Card.WeatherIcon date={toDate} time={time} width='40%' height='60%' />
      </FlexRow>
    </Card>
  );
};

export default WeatherSideCard;
