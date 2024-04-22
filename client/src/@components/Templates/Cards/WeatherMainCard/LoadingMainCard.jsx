import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Card from '../../../Composite/Cards/Card';
import Loading from '../../../UI/Loading/Loading';

const InfoNames = [
  'temperature',
  'humidity',
  'precipitationProbability',
  'oneHourPrecipitation',
  'windSpeed',
];

const LoadingMainCard = (props) => {
  return (
    <Card {...props}>
      {/* Main Card 영역 */}
      <FlexColumn flexRatio={[0.5, 0.5]}>
        <FlexRow flexRatio={[0.8, 0.2]}>
          <FlexColumn>
            <Loading />
            <Loading />
            <Loading />
          </FlexColumn>
          <FlexRow>
            <Loading />
          </FlexRow>
        </FlexRow>
        <FlexRow justifyContent='space-between'>
          {InfoNames.map((infoName) => (
            <Loading key={infoName} />
          ))}
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default LoadingMainCard;
