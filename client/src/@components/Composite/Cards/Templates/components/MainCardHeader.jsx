import { FlexRow, FlexColumn } from '../../../../UI/Flex/Flex';
import TitleArea from './Area/TitleArea';
import Card from '../../Card';
import useTimeState from '../../../../../hooks/useTimeState';

const MainCardHeader = () => {
  const { date, time } = useTimeState();

  return (
    <FlexRow>
      <FlexColumn>
        <TitleArea />
        <Card.ChangeBar />
      </FlexColumn>
      <Card.WeatherIcon date={date} time={time} />
    </FlexRow>
  );
};

export default MainCardHeader;
