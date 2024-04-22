import moduleStyle from './MenuPage.module.css';

import { FlexColumn } from '../../@components/UI/Flex/Flex';
import WeatherTemplate from '../../@components/Templates/WeatherTemplate/WeatherTemplate';
import AirTemplate from '../../@components/Templates/WeatherTemplate/AirTemplate';

import Loading from '../../@components/UI/Loading/Loading';

import useAPIStatus from '../../hooks/useAPIStatus';
// TODO 내용 채우기
const MenuPage = () => {
  const status = useAPIStatus();

  if (status !== 'OK') {
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={moduleStyle.menu}
      >
        <Loading />
      </section>
    );
  }

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
