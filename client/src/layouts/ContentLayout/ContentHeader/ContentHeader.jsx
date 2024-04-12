import moduleCss from './ContentHeader.module.css';

import SearchArea from '../../../@components/UI/SearchArea.jsx/SearchArea';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';

const ContentHeader = () => {
  return (
    <header className={moduleCss.contentHeader}>
      <SearchArea />
      <section className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
