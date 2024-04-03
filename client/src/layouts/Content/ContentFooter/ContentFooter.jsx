import style from './ContentFooter.module.css';
import Information from '../../../@components/UI/Information/Information';
import Wrapper from '../../../@components/Composite/Wrapper/Wrapper';
import {
  GithubLogo,
  VelogLogo,
  LicenseLogo,
} from '../../../@components/UI/Logo/Logo';

const ContentFooter = () => {
  return (
    <footer className={style.contentFooter}>
      <section className={style.information}>
        <Information />
        <Wrapper.Parent className={style.logoWrapper}>
          <LicenseLogo />
          <GithubLogo />
          <VelogLogo />
        </Wrapper.Parent>
      </section>
    </footer>
  );
};

export default ContentFooter;
