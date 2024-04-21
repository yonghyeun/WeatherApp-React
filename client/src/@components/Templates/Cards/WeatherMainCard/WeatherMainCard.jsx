import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Card from '../../../Composite/Cards/Card';
import useTimeState from '../../../../hooks/useTimeState';
const WeatherMainCard = (props) => {
  const { date, time } = useTimeState();
  return (
    <Card {...props}>
      {/* Main Card 영역 */}
      <FlexColumn flexRatio={[0.5, 0.5]}>
        <FlexRow flexRatio={[0.8, 0.2]}>
          <FlexColumn>
            <Card.LocationTitle />
            <Card.DateTitle />
            <Card.ChangeBar />
          </FlexColumn>
          <FlexRow>
            <Card.WeatherIcon date={date} time={time} />
          </FlexRow>
        </FlexRow>
        <FlexRow justifyContent='space-around'>
          <div>{/* info Card */}</div>
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default WeatherMainCard;
