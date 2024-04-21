import useWeatherState from '../../../../hooks/useWeatherState';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../Typography/Typography';
import WeatherIcon from '../UI/WeatherIcon/WeatherIcon';
const SubCard = ({ date, time = '0900' }) => {
  // 1. min  , max 값 가져오기
  // 2. 9am 날씨 상태 가져오기
  const fetchedWeather = useWeatherState(date);
  const { minTemperature, maxTemperature } = fetchedWeather;

  // TODO subCard style module 생성하기
  return (
    <section>
      <FlexRow alignItems='center'>
        <FlexColumn justifyContent='space'>
          <Typography.MainText>{date}</Typography.MainText>
          <Typography.SubTitle>
            {/* TODO 빨간색, 파란색 넣기 */}
            {minTemperature}/{maxTemperature}
          </Typography.SubTitle>
        </FlexColumn>
        <WeatherIcon date={date} time={time} width='30%' height='30%' />
      </FlexRow>
    </section>
  );
};

export default SubCard;
