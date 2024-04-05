import moduleCss from './MenuPage.module.css';

import Wrapper from '../../@components/Composite/Wrapper/Wrapper';
import useTheme from '../../hooks/useTheme';
// TODO 내용 채우기
const MenuPage = () => {
  const { theme } = useTheme();
  return (
    <section style={{ ...theme.Default }} className={moduleCss.menu}>
      <section style={{ ...theme.Default }} className={moduleCss.menuContent}>
        <Wrapper.Parent ratio={[0.2, 0.4, 0.4]} height='30%'>
          <Wrapper.Vertical ratio={[0.6, 0.4]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'red',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'green',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Vertical>
          <Wrapper.Horizontal ratio={[0.4, 0.6]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'red',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'green',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Horizontal>
          <div
            style={{
              ...theme.Default,
              backgroundColor: 'red',
              display: 'flex',
            }}
          ></div>
        </Wrapper.Parent>

        <Wrapper.Parent ratio={[0.4, 0.2, 0.4]} height='40%'>
          <Wrapper.Horizontal ratio={[0.6, 0.4]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'blue',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'orange',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Horizontal>
          <div
            style={{
              ...theme.Default,
              backgroundColor: 'orange',
              display: 'flex',
            }}
          ></div>
          <Wrapper.Vertical ratio={[0.4, 0.6]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'blue',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'orange',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Vertical>
        </Wrapper.Parent>

        <Wrapper.Parent ratio={[0.3, 0.2, 0.2, 0.3]} height='60%'>
          <div
            style={{
              ...theme.Default,
              backgroundColor: 'pink',
              display: 'flex',
            }}
          ></div>
          <Wrapper.Vertical ratio={[0.6, 0.4]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'pink',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'yellow',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Vertical>
          <Wrapper.Horizontal ratio={[0.4, 0.6]}>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'yellow',
                display: 'flex',
              }}
            ></div>
            <div
              style={{
                ...theme.Default,
                backgroundColor: 'pink',
                display: 'flex',
              }}
            ></div>
          </Wrapper.Horizontal>
          <div
            style={{
              ...theme.Default,
              backgroundColor: 'pink',
              display: 'flex',
            }}
          ></div>
        </Wrapper.Parent>
      </section>
    </section>
  );
};

export default MenuPage;
