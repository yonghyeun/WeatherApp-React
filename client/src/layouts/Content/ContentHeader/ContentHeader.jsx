import style from './ContentHeader.module.css';

import SearchForm from '../../../@components/Composite/SearchForm/SearchForm';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';
// TODO 내부에 컴포넌트들 집어넣기
const ContentHeader = () => {
  return (
    <header className={style.contentHeader}>
      <SearchForm>
        <SearchForm.Input />
        <SearchForm.Button />
      </SearchForm>
      <section className={style.buttonWrapper}>
        <ThemeButton />
        <TempButton />
      </section>
    </header>
  );
};

export default ContentHeader;
