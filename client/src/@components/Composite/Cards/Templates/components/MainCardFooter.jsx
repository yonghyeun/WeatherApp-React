import { FlexRow } from '../../../../UI/Flex/Flex';
import Card from '../../Card';
import useTimeState from '../../../../../hooks/useTimeState';
const MainCardFooter = () => {
  const { date, time } = useTimeState();
  const InfoNames = [
    'temperature',
    'humidity',
    'precipitationProbability',
    'oneHourPrecipitation',
    'windSpeed',
  ];

  return (
    <FlexRow justifyContent='space-around'>
      {InfoNames.map((infoName) => (
        <Card.Info date={date} time={time} infoName={infoName}></Card.Info>
      ))}
    </FlexRow>
  );
};

export default MainCardFooter;
