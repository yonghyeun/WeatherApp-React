// import style
import style from './Logo.module.css';

// TODO 각 로고 별로 svg 로 아이콘 집어넣기
// TODO 선택된 테마별로 다른 로고 집어넣기
const GithubLogo = () => {
  return (
    <a href='https://github.com/yonghyeun/WeatherApp-React'>
      <img src='./client/src/assets/images/github(white).png' alt='' />
    </a>
  );
};
const VelogLogo = () => {
  return (
    <a href='https://velog.io/@yonghyeun/posts'>
      <img src='client/src/assets/images/velog.png' alt='' />
    </a>
  );
};

const LicenseLogo = () => {};

export { GithubLogo, VelogLogo, LicenseLogo };
