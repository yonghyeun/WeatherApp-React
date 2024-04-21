import moduleCss from './ContentFooter.module.css';
import { FlexRow } from '../../../@components/UI/Flex/Flex';
import {
  GithubLogo,
  VelogLogo,
  LicenseLogo,
} from '../../../@components/UI/Logo/Logo';
import useLocation from '../../../hooks/useLocation';

const ContentFooter = () => {
  const location = useLocation();

  return (
    <footer className={moduleCss.contentFooter}>
      <section className={moduleCss.information}>
        <span>
          <p>기상청과 한국환경공단에서 제공하는 {location}의 기상정보입니다.</p>
          <p>
            날씨 정보는 검색일 기준으로 전일 오후 11시에 예보된 날씨 정보입니다.
          </p>
          <p>
            미세먼지 정보 데이터는 실시간 관측된 자료이며 측정소 현지 사정이나
            데이터의 수신 상태에 따라 미수신 될 수 있습니다.
          </p>
        </span>
        <FlexRow alignItems='center'>
          <LicenseLogo />
          <GithubLogo />
          <VelogLogo />
        </FlexRow>
      </section>
    </footer>
  );
};

export default ContentFooter;
