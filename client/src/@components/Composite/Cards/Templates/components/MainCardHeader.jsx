import { FlexRow, FlexColumn } from '../../../../UI/Flex/Flex';
import TitleArea from './Area/TitleArea';
import Card from '../../Card';
import useTimeState from '../../../../../hooks/useTimeState';

const MainCardHeader = (props) => {
  const { date, time } = useTimeState();

  return (
    <FlexRow flexRatio={[0.8, 0.2]}>
      <FlexColumn>
        <TitleArea />
        <Card.ChangeBar />
      </FlexColumn>
      <Card.WeatherIcon date={date} time={time} />
    </FlexRow>
  );
};

export default MainCardHeader;
