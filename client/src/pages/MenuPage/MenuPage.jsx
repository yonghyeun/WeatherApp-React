import moduleStyle from './MenuPage.module.css';

import { FlexColumn, FlexRow } from '../../@components/UI/Flex/Flex';
import WeatherTemplate from '../../@components/Templates/WeatherTemplate/WeatherTemplate';
import AirTemplate from '../../@components/Templates/WeatherTemplate/AirTemplate';
// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={moduleStyle.menu}>
      <FlexColumn>
        <WeatherTemplate />
        <AirTemplate />
      </FlexColumn>
    </section>
  );
};

export default MenuPage;
