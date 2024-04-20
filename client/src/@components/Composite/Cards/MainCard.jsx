import useTimeState from '../../../hooks/useTimeState';
import Card from './Card';
import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
import InfoCard from './UI/InfoCard';
const MainCard = ({ flexGrow }) => {
  const { date, time } = useTimeState();
  const InfoNames = [
    'temperature',
    'humidity',
    'precipitationProbability',
    'oneHourPrecipitation',
    'windSpeed',
  ];

  return (
    <Card flexGrow={flexGrow}>
      <FlexRow flexRatio={[0.8, 0.2]}>
        <FlexColumn flexRatio={[0.5, 0.5]}>
          <FlexRow flexRatio={[0.9, 0.3]}>
            <FlexColumn>
              <FlexColumn justifyContent='center' flexRatio={[0.5, 0.5]}>
                <Card.LocationTitle />
                <Card.DateTitle />
              </FlexColumn>
              <Card.ChangeBar />
            </FlexColumn>
            <Card.WeatherIcon date={date} time={time} />
          </FlexRow>
          <FlexRow justifyContent='space-around'>
            {InfoNames.map((infoName) => (
              <InfoCard date={date} time={time} infoName={infoName} />
            ))}
          </FlexRow>
        </FlexColumn>
        <FlexColumn flexRatio={[0.3, 0.3, 0.3]}>
          {/* TODO subCard 로 채우기 */}
          <div style={{ backgroundColor: 'green' }}>1</div>
          <div style={{ backgroundColor: 'green' }}>2</div>
          <div style={{ backgroundColor: 'green' }}>3</div>
        </FlexColumn>
      </FlexRow>
    </Card>
  );
};

export default MainCard;
