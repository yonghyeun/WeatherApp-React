import moduleCss from './ContentHeader.module.css';

import SearchForm from '../../../@components/Composite/SearchForm/SearchForm';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';

import useTheme from '../../../hooks/useTheme';

const ContentHeader = () => {
  const { theme } = useTheme();
  return (
    <header style={{ ...theme.Default }} className={moduleCss.contentHeader}>
      <SearchForm>
        <SearchForm.Input />
        <SearchForm.Button />
      </SearchForm>
      <section style={{ ...theme.Default }} className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
