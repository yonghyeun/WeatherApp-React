import { FlexColumn, FlexRow } from '../UI/Flex/Flex';
import Card from '../Composite/Cards/Card';

const WeatherTemplate = () => {
  // TODO section 에 style module 추가하기
  return (
    <section>
      <FlexRow flexRatio={[0.7, 0.3]}>
        <Card>
          {/* Main Card 영역 */}
          <FlexColumn flexRatio={[0.5, 0.5]}>
            <FlexRow>
              <FlexColumn>
                {/* Title , Location , ChangeBar 영 */}
              </FlexColumn>
              <div>
                {/* Icon 영역 */}
              </div>
            </FlexRow>
            <FlexRow justifyContent='space-around'>
              <div>{/* info Card */}</div>
            </FlexRow>
          </FlexColumn>
        </Card>
        {/* SideCard 영역 */}
        <Card>
          <FlexColumn>{/*sideBar */}</FlexColumn>
        </Card>
      </FlexRow>
    </section>
  );
};

export default WeatherTemplate;
