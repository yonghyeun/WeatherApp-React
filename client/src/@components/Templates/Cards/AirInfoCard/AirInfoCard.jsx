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

const AirInfoCard = ({ name }) => {
  const fetchedAir = useAirState();
  const grade = fetchedAir[`${name}Grade`];
  const value = fetchedAir[`${name}Value`];
  const unit = airUnitMap[name];
  return (
    <Card>
      <FlexColumn alignItems='center'>
        <Typography.SubTitle>{name}</Typography.SubTitle>
        <Typography.MainTitle>{gradeMap[grade]}</Typography.MainTitle>
        <Typography.SubText>
          {value}/{unit}
        </Typography.SubText>
      </FlexColumn>
    </Card>
  );
};

export default AirInfoCard;
