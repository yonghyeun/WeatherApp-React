import moduleCss from './ContentHeader.module.css';

import SearchArea from '../../../@components/UI/SearchArea.jsx/SearchArea';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import ShareButton from '../../../@components/UI/ShareButton/ShareButton';
const ContentHeader = () => {
  return (
    <header className={moduleCss.contentHeader}>
      <SearchArea />
      <section className={moduleCss.buttonWrapper}>
        <ShareButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
