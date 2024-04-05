import moduleCss from './Content.module.css';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentMain from './ContentMain/ContentMain';
import ContentFooter from './ContentFooter/ContentFooter';

import useTheme from '../../hooks/useTheme';

const ContentLayout = () => {
  const { theme } = useTheme();
  return (
    <section style={{ ...theme.Default }} className={moduleCss.Content}>
      <ContentHeader />
      <ContentMain />
      <ContentFooter />
    </section>
  );
};

export default ContentLayout;
