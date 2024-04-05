import moduleCss from './AboutPage.module.css';
import useTheme from '../../hooks/useTheme';
// TODO 내용 채우기
const AboutPage = () => {
  const { theme } = useTheme();
  return (
    <section style={{ ...theme.Default }} className={moduleCss.about}>
      <h1 style={{ ...theme.Default }}>TDweather 를 소개하는 내용들</h1>
      <p style={{ ...theme.Default }}>
        <i style={{ ...theme.Default }}>나중에 채웁시다</i>
      </p>
    </section>
  );
};

export default AboutPage;
