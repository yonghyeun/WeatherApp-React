import useAirState from '../../../../hooks/useAirState';
import { FlexColumn } from '../../../UI/Flex/Flex';
import Card from '../Card';
import Typography from '../../Typography/Typography';

const AirCard = ({ key }) => {
  const fetchedAir = useAirState();
  const grade = fetchedAir[`${key}Grade`];
  const value = fetchedAir[`${key}Value`];

  return (
    <Card>
      <FlexColumn>
        <Typography.SubTitle>{key}</Typography.SubTitle>
        <Typography.MainTitle>{grade}</Typography.MainTitle>
        <Typography.SubText>{value}</Typography.SubText>
      </FlexColumn>
    </Card>
  );
};
