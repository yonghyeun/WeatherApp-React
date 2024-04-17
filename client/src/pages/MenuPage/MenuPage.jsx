import moduleCss from './MenuPage.module.css';

import { FlexColumn, FlexRow } from '../../@components/UI/Flex/Flex';
import MainCard from '../../@components/Composite/Cards/MainCard';

// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={moduleCss.menu}>
      <FlexRow>
        <div
          style={{ backgroundColor: 'red', width: '200px', height: '200px' }}
        ></div>
        <div
          style={{ backgroundColor: 'red', width: '400px', height: '200px' }}
        ></div>

        <FlexColumn>
          {' '}
          <div
            style={{ backgroundColor: 'red', width: '400px', height: '200px' }}
          ></div>
          <div
            style={{ backgroundColor: 'red', width: '400px', height: '200px' }}
          ></div>
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default MenuPage;
