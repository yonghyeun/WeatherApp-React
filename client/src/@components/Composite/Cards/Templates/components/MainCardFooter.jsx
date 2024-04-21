import { FlexRow } from '../../../../UI/Flex/Flex';
import Card from '../../Card';
const InfoArea = ({ date, time }) => {
  const InfoNames = [
    'temperature',
    'humidity',
    'precipitationProbability',
    'oneHourPrecipitation',
    'windSpeed',
  ];

  return (
    <FlexRow>
      {InfoNames.map((infoName) => (
        <Card.Info date={date} time={time} infoName={infoName}></Card.Info>
      ))}
    </FlexRow>
  );
};

export default InfoArea;
