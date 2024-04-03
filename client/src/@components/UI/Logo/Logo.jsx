// import style
import style from './Logo.module.css';

// TODO 각 로고 별로 svg 로 아이콘 집어넣기
// TODO 선택된 테마별로 다른 로고 집어넣기
const GithubLogo = () => {
  return (
    <a
      href='https://github.com/yonghyeun/WeatherApp-React'
      className={style.logoWrapper}
    >
      <img
        src='https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/github(white).png?raw=true'
        alt=''
        className={style.logoImg}
      />
    </a>
  );
};
const VelogLogo = () => {
  return (
    <a href='https://velog.io/@yonghyeun/posts' className={style.logoWrapper}>
      <img
        src='https://github.com/yonghyeun/WeatherApp-React/blob/main/client/src/assets/images/velog.png?raw=true'
        alt=''
        className={style.logoImg}
      />
    </a>
  );
};

const LicenseLogo = () => {};

export { GithubLogo, VelogLogo, LicenseLogo };
