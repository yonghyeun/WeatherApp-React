import useTimeState from '../../../../../hooks/useTimeState';
import useWeatherIcon from '../../../../../hooks/useWeatherIcon';
import useWeatherState from '../../../../../hooks/useWeatherState';
import Card from '../../../../Composite/Cards/Card';
import Typography from '../../../../Composite/Typography/Typography';
import { FlexColumn, FlexRow } from '../../../../UI/Flex/Flex';
const keyTitleMap = {
  temperature: '온도',
  humidity: '습도',
  precipitationProbability: '강수확률',
  oneHourPrecipitation: '강수량',
  windSpeed: '풍속',
};

const UnitMap = {
  temperature: '°C',
  humidity: '%',
  precipitationProbability: '%',
  oneHourPrecipitation: '/sec',
  windSpeed: 'm/s',
};

const WeatherInfoCard = ({ infoName }) => {
  const { date, time } = useTimeState();
  const infoTitle = keyTitleMap[infoName];
  const infoIcon = useWeatherIcon(infoName);
  const value = useWeatherState(date, time)[infoName];
  const unit = UnitMap[infoName];

  return (
    <Card>
      <FlexColumn>
        <FlexRow justifyContent='center' alignItems='center'>
          <Typography.SubTitle>{infoIcon}</Typography.SubTitle>
          <Typography.MainText>{infoTitle}</Typography.MainText>
        </FlexRow>
        <FlexRow justifyContent='center'>
          <Typography.SubTitle>
            {value} {unit}
          </Typography.SubTitle>
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default WeatherInfoCard;
