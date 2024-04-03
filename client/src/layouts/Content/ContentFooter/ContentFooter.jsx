import style from './ContentFooter.module.css';
import Information from '../../../@components/UI/Information/Information';
import Wrapper from '../../../@components/Composite/Wrapper/Wrapper';
import { GithubLogo, VelogLogo } from '../../../@components/UI/Logo/Logo';

// TODO 내부에 컴포넌트 집어넣기
const ContentFooter = () => {
  return (
    <footer className={style.contentFooter}>
      <section className={style.information}>
        <Information />
        <Wrapper.Parent className={style.logoWrapper}>
          <GithubLogo />
          <VelogLogo />
        </Wrapper.Parent>
      </section>
    </footer>
  );
};

export default ContentFooter;
