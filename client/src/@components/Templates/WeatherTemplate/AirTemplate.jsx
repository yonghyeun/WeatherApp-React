import Card from '../../Composite/Cards/Card';
import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
import Typograph from '../../Composite/Typography/Typography';
import DateTitle from '../../Composite/Cards/UI/Title/DateTitle';
const AirTemplate = () => {
  return (
    <section>
      <Card>
        <FlexColumn>
          <Card.DateTitle extraText='실시간 미세먼지 정보' />
          <Typograph.MainTitle></Typograph.MainTitle>
          <FlexRow></FlexRow>
        </FlexColumn>
      </Card>
    </section>
  );
};

export default AirTemplate;
