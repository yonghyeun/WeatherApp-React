import moduleCss from './ContentHeader.module.css';

import { SearchRefProvider } from '../../../context/SearchRefProvider';

import SearchForm from '../../../@components/Composite/SearchForm/SearchForm';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';

import useTheme from '../../../hooks/useTheme';

// TODO 내부에 컴포넌트들 집어넣기
const ContentHeader = () => {
  const { theme } = useTheme();
  return (
    <header style={{ ...theme.Default }} className={moduleCss.contentHeader}>
      <SearchRefProvider>
        <SearchForm>
          <SearchForm.Input />
          <SearchForm.Button />
        </SearchForm>
      </SearchRefProvider>
      <section style={{ ...theme.Default }} className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
