import useTheme from '../../../../../hooks/useTheme';
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
  const theme = useTheme();

  return (
    <Card backgroundColor={theme === 'dark' ? 'grey' : '#f0f0f0'}>
      <FlexColumn>
        <FlexRow justifyContent='center' alignItems='center'>
          <Typography.MainText>{infoIcon}</Typography.MainText>
          <Typography.MainText>{infoTitle}</Typography.MainText>
        </FlexRow>
        <FlexRow justifyContent='center'>
          <Typography.MainText>
            {value}
            {unit}
          </Typography.MainText>
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default WeatherInfoCard;
