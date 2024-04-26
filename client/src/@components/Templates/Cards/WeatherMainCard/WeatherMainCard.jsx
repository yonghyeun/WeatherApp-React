import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Card from '../../../Composite/Cards/Card';
import WeatherInfoCard from './WeatherInfoCard/WeatherInfoCard';
import useTimeState from '../../../../hooks/useTimeState';
import Typography from '../../../Composite/Typography/Typography';
const InfoNames = [
  'temperature',
  'humidity',
  'precipitationProbability',
  'oneHourPrecipitation',
  'windSpeed',
];

const WeatherMainCard = (props) => {
  const { date, time } = useTimeState();
  return (
    <Card {...props}>
      <FlexColumn flexRatio={[0.5, 0.5]}>
        <FlexRow flexRatio={[0.3, 0.8]}>
          <FlexRow>
            <Card.WeatherIcon date={date} time={time} />
          </FlexRow>
          <FlexColumn justifyContent='space-around'>
            <FlexColumn>
              <Card.LocationTitle />
              <Card.DateTitle />
            </FlexColumn>
            <Card.ChangeBar />
          </FlexColumn>
        </FlexRow>
        <FlexRow justifyContent='space-between'>
          {InfoNames.map((infoName) => (
            <WeatherInfoCard infoName={infoName} key={infoName} />
          ))}
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default WeatherMainCard;
