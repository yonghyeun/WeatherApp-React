import { FlexColumn, FlexRow } from '../../UI/Flex/Flex';
import Card from '../../Composite/Cards/Card';
import WeatherMainCard from '../Cards/WeatherMainCard/WeatherMainCard';
import moduleStyle from './WeatherTemplate.module.css';

const WeatherTemplate = () => {
  // TODO section 에 style module 추가하기
  return (
    <section className={moduleStyle.template}>
      <FlexRow flexRatio={[0.7, 0.3]}>
        <WeatherMainCard />
        {/* SideCard 영역 */}
        <Card>
          <FlexColumn>{/*sideBar */}</FlexColumn>
        </Card>
      </FlexRow>
    </section>
  );
};

export default WeatherTemplate;
