import useWeatherState from '../../../../hooks/useWeatherState';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../Typography/Typography';
import WeatherIcon from '../UI/WeatherIcon/WeatherIcon';
import Card from '../Card';
const SubCard = ({ date, time = '0900' }) => {
  const fetchedWeather = useWeatherState(date);
  const { minTemperature, maxTemperature } = fetchedWeather;
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6);
  // TODO subCard style module 생성하기
  return (
    <Card>
      <FlexRow alignItems='center'>
        <FlexColumn justifyContent='space'>
          <Typography.MainText>
            {year}.{month}.{day}
          </Typography.MainText>
          <Typography.SubTitle>
            {/* TODO 빨간색, 파란색 넣기 */}
            {minTemperature}/{maxTemperature}
          </Typography.SubTitle>
        </FlexColumn>
        <WeatherIcon date={date} time={time} width='30%' height='60%' />
      </FlexRow>
    </Card>
  );
};

export default SubCard;
