import useAirState from '../../../../hooks/useAirState';
import Card from '../../../Composite/Cards/Card';
import { FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../../Composite/Typography/Typography';
const gradeMap = {
  1: '좋음',
  2: '보통',
  3: '나쁨',
  4: '매우나쁨',
};

const airUnitMap = {
  co: 'ppm',
  no2: 'ppm',
  o3: 'ppm',
  so2: 'ppm',
  pm10: '㎍/㎥',
  pm25: '㎍/㎥',
};

const airNameMap = {
  co: '일산화탄소',
  no2: '이산화질소',
  o3: '오존',
  so2: '이황산가스',
  pm10: '미세먼지',
  pm25: '초미세먼지',
};

const AirInfoCard = ({ name }) => {
  const fetchedAir = useAirState();
  const grade = fetchedAir[`${name}Grade`];
  const value = fetchedAir[`${name}Value`];
  const unit = airUnitMap[name];
  return (
    <Card>
      <FlexColumn alignItems='center'>
        <Typography.MainText>{airNameMap[name]}</Typography.MainText>
        <Typography.SubText>{gradeMap[grade]}</Typography.SubText>
        <Typography.SubText>
          {value}/{unit}
        </Typography.SubText>
      </FlexColumn>
    </Card>
  );
};

export default AirInfoCard;
