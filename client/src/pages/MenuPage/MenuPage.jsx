import moduleCss from './MenuPage.module.css';

import { FlexColumn, FlexRow } from '../../@components/UI/Flex/Flex';
import MainCard from '../../@components/Composite/Cards/MainCard';
// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={moduleCss.menu}>
      <FlexRow flexGrow={[0.5, 0.5]}>
        <MainCard />
        <MainCard />
      </FlexRow>
    </section>
  );
};

export default MenuPage;
