import style from './MenuPage.module.css';

import CardWrapper from '../../@components/Composite/CardWrapper/CardWrapper';

// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={style.menu}>
      <h1>Menu 에 대한 내용이 담긴 페이지</h1>
      <CardWrapper.Horizontal>
        <div style={{ backgroundColor: 'black' }}></div>
        <div style={{ backgroundColor: 'black' }}></div>
      </CardWrapper.Horizontal>
      <p>
        <i>나중에 채웁시다</i>
      </p>
    </section>
  );
};

export default MenuPage;
