import useWeatherState from '../../../../hooks/useWeatherState';
import Card from '../../../Composite/Cards/Card';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../../Composite/Typography/Typography';
import useDispatchDate from '../../../../hooks/useDispatchDate';
import useTimeState from '../../../../hooks/useTimeState';

const maxTempStyle = { fontSize: '20px', color: 'red', display: 'inline' };
const minTempStyle = { fontSize: '20px', color: 'blue', display: 'inline' };

const WeatherSideCard = ({ toDate, time = '0900' }) => {
  const { date } = useTimeState();
  const fetchedWeather = useWeatherState(toDate);
  const dispatchDate = useDispatchDate(toDate);
  const { minTemperature, maxTemperature } = fetchedWeather;
  const month = toDate.substring(4, 6);
  const day = toDate.substring(6);

  const isChoose = day === date.substring(6);

  return (
    <Card
      backgroundColor={isChoose && '#1B8EF2'}
      color={isChoose && 'white'}
      fontWeight={isChoose && 900}
      onClick={dispatchDate}
    >
      <FlexRow justifyContent='center' alignItems='center'>
        <FlexColumn>
          <Typography.MainText>
            {month}.{day}
          </Typography.MainText>
          <Typography.SubText>
            <p style={{ ...minTempStyle }}>{minTemperature}</p>
            <p style={{ display: 'inline' }}> / </p>
            <p style={{ ...maxTempStyle }}>{maxTemperature}</p>
          </Typography.SubText>
        </FlexColumn>
        <Card.WeatherIcon date={toDate} time={time} width='40%' height='60%' />
      </FlexRow>
    </Card>
  );
};

export default WeatherSideCard;
