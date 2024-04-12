// import style
import useTheme from '../../../hooks/useTheme';
import moduleCss from './Logo.module.css';

// import CustomHooks

const GithubLogo = () => {
  const theme = useTheme();
  return (
    <a href='https://github.com/yonghyeun/WeatherApp-React' target='_blink'>
      <img
        // TODO 테마에 따라 이미지 다른거 가져오기
        src={`https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/github_${theme}.png?raw=true`}
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
