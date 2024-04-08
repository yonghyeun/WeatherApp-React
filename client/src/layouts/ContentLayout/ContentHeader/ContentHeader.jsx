import moduleCss from './ContentHeader.module.css';

import SearchArea from '../../../@components/UI/SearchArea/SearchArea';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';

import useTheme from '../../../hooks/useTheme';

import { SearchRefProvider } from '../../../context/SearchRefProvider';

const ContentHeader = () => {
  const { theme } = useTheme();
  return (
    <header style={{ ...theme.Default }} className={moduleCss.contentHeader}>
      <SearchRefProvider>
        <SearchArea />
      </SearchRefProvider>
      <section style={{ ...theme.Default }} className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
