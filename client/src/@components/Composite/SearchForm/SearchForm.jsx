// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

// import style
import style from './SearchForm.module.css';

const SearchForm = ({ children }) => {
  return <Form className={style.searchForm}>{children}</Form>;
};

const SearchButton = () => {
  // TODO onClick , item , className 채우기
  return <Button item='click me !' className={style.searchButton} />;
};

const SearchInput = () => {
  // TODO placeHolder , onChange , className 채우기
  return (
    <Input placeHolder='지역을 입력해주세요' className={style.searchInput} />
  );
};

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;

export default SearchForm;
