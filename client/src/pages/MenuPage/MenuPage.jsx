import moduleCss from './MenuPage.module.css';

import Wrapper from '../../@components/Composite/Wrapper/Wrapper';
import useTheme from '../../hooks/useTheme';
// TODO 내용 채우기
const MenuPage = () => {
  const { theme } = useTheme();
  return (
    <section style={{ ...theme.Default }} className={moduleCss.menu}>
      <section style={{ ...theme.Default }} className={moduleCss.menuContent}>
        <Wrapper.Parent ratio={[0.6, 0.4]} height='150%'>
          <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
          <Wrapper.Vertical ratio={[0.5, 0.5]}>
            <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
            <Wrapper.Horizontal>
              <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
              <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
            </Wrapper.Horizontal>
          </Wrapper.Vertical>
        </Wrapper.Parent>
        <Wrapper.Parent height='40%'>
          <div style={{ backgroundColor: 'orange', display: 'flex' }}></div>
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
