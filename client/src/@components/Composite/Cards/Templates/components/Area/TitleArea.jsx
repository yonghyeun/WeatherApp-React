import { FlexColumn } from '../../../../../UI/Flex/Flex';
import Card from '../../../Card';

const TitleArea = () => (
  <FlexColumn justifyContent='center' flexRatio={[0.5, 0.5]}>
    <Card.LocationTitle />
    <Card.DateTitle />
  </FlexColumn>
);

export default TitleArea;
