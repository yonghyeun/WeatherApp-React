import moduleCss from './ContentFooter.module.css';
import Information from '../../../@components/UI/Information/Information';
import Wrapper from '../../../@components/Composite/Wrapper/Wrapper';
import {
  GithubLogo,
  VelogLogo,
  LicenseLogo,
} from '../../../@components/UI/Logo/Logo';

import useTheme from '../../../hooks/useTheme';

const ContentFooter = () => {
  const { theme } = useTheme();
  return (
    <footer style={{ ...theme.Default }} className={moduleCss.contentFooter}>
      <section style={{ ...theme.Default }} className={moduleCss.information}>
        <Information />
        <Wrapper.Parent className={moduleCss.logoWrapper}>
          <LicenseLogo />
          <GithubLogo />
          <VelogLogo />
        </Wrapper.Parent>
      </section>
    </footer>
  );
};

export default ContentFooter;
