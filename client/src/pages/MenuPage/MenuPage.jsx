import moduleCss from './MenuPage.module.css';

import { FlexColumn, FlexRow } from '../../@components/UI/Flex/Flex';
import MainCard from '../../@components/Composite/Cards/MainCard';
// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={moduleCss.menu}>
      <FlexRow flexRatio={[0.5, 0.5]}>
        <MainCard />
        <FlexColumn>
          <MainCard />
          <MainCard />
          <MainCard />
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default MenuPage;
