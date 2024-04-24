import useWeatherState from '../../../../hooks/useWeatherState';
import Card from '../../../Composite/Cards/Card';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../../Composite/Typography/Typography';
import useDispatchDate from '../../../../hooks/useDispatchDate';
import useTimeState from '../../../../hooks/useTimeState';
import useTheme from '../../../../hooks/useTheme';

const boxShadow = {
  dark: {
    backgroundColor: '#f9d835', // Bright yellow
    boxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)', // Soft light shadow for dark mode
  },
  light: {
    backgroundColor: '#f9d835',
    boxShadow:
      '0 2px 4px rgba(0, 0, 0, 0.2)' /* Subtle dark shadow for light mode */,
  },
};

const WeatherSideCard = ({ toDate, time = '0900' }) => {
  const { date } = useTimeState();
  const theme = useTheme();
  const fetchedWeather = useWeatherState(toDate);
  const dispatchDate = useDispatchDate(toDate);
  const { minTemperature, maxTemperature } = fetchedWeather;
  const month = toDate.substring(4, 6);
  const day = toDate.substring(6);

  let style;
  if (day === date.substring(6)) {
    style = boxShadow[theme];
  }

  return (
    <div style={{ ...style }}>
      <Card onClick={dispatchDate}>
        <FlexRow justifyContent='center' alignItems='center'>
          <FlexColumn>
            <Typography.MainText>
              {month}.{day}
            </Typography.MainText>
            <Typography.SubText>
              {maxTemperature}/{minTemperature}
            </Typography.SubText>
          </FlexColumn>
          <Card.WeatherIcon
            date={toDate}
            time={time}
            width='40%'
            height='60%'
          />
        </FlexRow>
      </Card>
    </div>
  );
};

export default WeatherSideCard;
