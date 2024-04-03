import style from './MenuPage.module.css';

import Wrapper from '../../@components/Composite/Wrapper/Wrapper';

// TODO 내용 채우기
const MenuPage = () => {
  return (
    <section className={style.menu}>
      <section className={style.menuContent}>
        <Wrapper.Parent ratio={[0.2, 0.4, 0.4]} height='30%'>
          <Wrapper.Vertical ratio={[0.6, 0.4]}>
            <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
          </Wrapper.Vertical>
          <Wrapper.Horizontal ratio={[0.4, 0.6]}>
            <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
          </Wrapper.Horizontal>
          <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
        </Wrapper.Parent>

        <Wrapper.Parent ratio={[0.4, 0.2, 0.4]} height='40%'>
          <Wrapper.Horizontal ratio={[0.6, 0.4]}>
            <div style={{ backgroundColor: 'blue', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'orange', display: 'flex' }}></div>
          </Wrapper.Horizontal>
          <div style={{ backgroundColor: 'orange', display: 'flex' }}></div>
          <Wrapper.Vertical ratio={[0.4, 0.6]}>
            <div style={{ backgroundColor: 'blue', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'orange', display: 'flex' }}></div>
          </Wrapper.Vertical>
        </Wrapper.Parent>

        <Wrapper.Parent ratio={[0.3, 0.2, 0.2, 0.3]} height='60%'>
          <div style={{ backgroundColor: 'pink', display: 'flex' }}></div>
          <Wrapper.Vertical ratio={[0.6, 0.4]}>
            <div style={{ backgroundColor: 'pink', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'yellow', display: 'flex' }}></div>
          </Wrapper.Vertical>
          <Wrapper.Horizontal ratio={[0.4, 0.6]}>
            <div style={{ backgroundColor: 'yellow', display: 'flex' }}></div>
            <div style={{ backgroundColor: 'pink', display: 'flex' }}></div>
          </Wrapper.Horizontal>
          <div style={{ backgroundColor: 'pink', display: 'flex' }}></div>
        </Wrapper.Parent>
      </section>
    </section>
  );
};

export default MenuPage;
