import Card from '../Card';
import { FlexRow, FlexColumn } from '../../../UI/Flex/Flex';
import MainCardHeader from './components/MainCardHeader';
import MainCardFooter from './components/MainCardFooter';
import MainCardSide from './components/MainCardSide';
const MainCard = ({ flexGrow }) => {
  return (
    <Card flexGrow={flexGrow}>
      <FlexRow flexRatio={[0.8, 0.2]}>
        <FlexColumn flexRatio={[0.5, 0.5]}>
          <MainCardHeader />
          <MainCardFooter />
        </FlexColumn>
        <MainCardSide />
      </FlexRow>
    </Card>
  );
};

export default MainCard;
