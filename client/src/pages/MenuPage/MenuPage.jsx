import style from './MenuPage.module.css';

import CardWrapper from '../../@components/Composite/CardWrapper/CardWrapper';

// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={style.menu}>
      <h1>Menu 에 대한 내용이 담긴 페이지</h1>
      <div style={{ padding: '2%', width: '100%', height: '100%' }}>
        <CardWrapper.Horizontal ratio={[0.3, 0.3, 0.4]}>
          <div style={{ backgroundColor: 'black' }}></div>
          <CardWrapper.Vertical>
            <div style={{ backgroundColor: 'black' }}></div>
            <div style={{ backgroundColor: 'black' }}></div>
          </CardWrapper.Vertical>
          <div style={{ backgroundColor: 'black' }}></div>
          <div style={{ backgroundColor: 'black' }}></div>
        </CardWrapper.Horizontal>
      </div>
      <p>
        <i>나중에 채웁시다</i>
      </p>
    </section>
  );
};

export default MenuPage;
