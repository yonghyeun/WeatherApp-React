// import style
import moduleCss from './Logo.module.css';

// TODO 각 로고 별로 svg 로 아이콘 집어넣기
// TODO 선택된 테마별로 다른 로고 집어넣기
const GithubLogo = () => {
  return (
    <a href='https://github.com/yonghyeun/WeatherApp-React' target='_blink'>
      <img
        src='https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/github(white).png?raw=true'
        alt='github'
        className={moduleCss.logoImg}
      />
    </a>
  );
};
const VelogLogo = () => {
  return (
    <a href='https://velog.io/@yonghyeun/posts' target='_blink'>
      <img
        src='https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/velog.png?raw=true'
        alt='velog'
        className={moduleCss.logoImg}
      />
    </a>
  );
};

const LicenseLogo = () => {
  return (
    <a href='https://en.wikipedia.org/wiki/MIT_License' target='_blink'>
      <img
        src='https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/mitLicense.png?raw=true'
        alt='mit'
        className={moduleCss.logoImg}
      />
    </a>
  );
};

export { GithubLogo, VelogLogo, LicenseLogo };
