import useTimeState from '../../../hooks/useTimeState';
import Card from './Card';
import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
const MainCard = ({ flexGrow }) => {
  const { date, time } = useTimeState();
  return (
    <Card flexGrow={flexGrow}>
      <FlexRow flexRatio={[0.8, 0.2]}>
        <FlexColumn flexRatio={[0.5, 0.5]}>
          <FlexRow flexRatio={[0.9, 0.1]}>
            <FlexColumn>
              <FlexColumn justifyContent='center' flexRatio={[0.5, 0.5]}>
                <Card.LocationTitle />
                <Card.DateTitle />
              </FlexColumn>
              <Card.ChangeBar />
            </FlexColumn>
            <Card.WeatherIcon date={date} time={time} />
          </FlexRow>
          <FlexRow flexRatio={[0.25, 0.25, 0.25, 0.25]}>
            <div style={{ width: '100px', backgroundColor: 'white' }}></div>
            <div style={{ width: '100px', backgroundColor: 'white' }}></div>
            <div style={{ width: '100px', backgroundColor: 'white' }}></div>
            <div style={{ width: '100px', backgroundColor: 'white' }}></div>
          </FlexRow>
        </FlexColumn>
        <FlexColumn flexRatio={[0.3, 0.3, 0.3]}>
          {/* TODO subCard 로 채우기 */}
          <div style={{ width: '100%', backgroundColor: 'white' }}>1</div>
          <div style={{ width: '100%', backgroundColor: 'white' }}>2</div>
          <div style={{ width: '100%', backgroundColor: 'white' }}>3</div>
        </FlexColumn>
      </FlexRow>
    </Card>
  );
};

export default MainCard;
