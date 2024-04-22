import Card from '../../../Composite/Cards/Card';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import Typography from '../../../Composite/Typography/Typography';
import Loading from '../../../UI/Loading/Loading';

const LoadingSideCard = () => {
  return (
    <Card>
      <FlexRow justifyContent='center' alignItems='center'>
        <FlexColumn>
          <Typography.SubTitle>
            <Loading />
          </Typography.SubTitle>
          <Typography.MainText>
            <Loading />
          </Typography.MainText>
        </FlexColumn>
        <Loading />
      </FlexRow>
    </Card>
  );
};

export default LoadingSideCard;
