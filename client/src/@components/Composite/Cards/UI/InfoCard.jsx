import Typography from '../../Typography/Typography';
import useWeatherState from '../../../../hooks/useWeatherState';
import useWeatherIcon from '../../../../hooks/useWeatherIcon';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';

const infoNameMap = {
  temperature: '온도',
  humidity: '습도',
  precipitationProbability: '강수확률',
  oneHourPrecipitation: '강수량',
  windSpeed: '풍속',
};

const weatherUnitMap = {
  temperature: '°C',
  humidity: '%',
  precipitationProbability: '%',
  oneHourPrecipitation: '/sec',
  windSpeed: 'm/s',
};

// TODO infoCard 스타일 지정하기
const InfoCard = ({ date, time, infoName }) => {
  const fetchedWeather = useWeatherState(date, time);
  const Info = fetchedWeather[infoName];
  const unit = weatherUnitMap[infoName];
  const Icon = useWeatherIcon(infoNameMap[infoName]);
  return (
    <section>
      <FlexColumn alignItems='center'>
        <FlexRow>
          <Typography.SubTitle>
            {Icon}
            {infoNameMap[infoName]}
          </Typography.SubTitle>
        </FlexRow>
        <Typography.MainText>
          {Info} {unit}
        </Typography.MainText>
      </FlexColumn>
    </section>
  );
};

export default InfoCard;
