import moduleCss from './MenuPage.module.css';

import { FlexColumn, FlexRow } from '../../@components/UI/Flex/Flex';
import WeatherTemplate from '../../@components/Templates/WeatherTemplate/WeatherTemplate';
// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={moduleCss.menu}>
      <WeatherTemplate />
    </section>
  );
};

export default MenuPage;
