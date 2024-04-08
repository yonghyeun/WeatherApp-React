// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

// import moduleCss
import moduleCss from './SearchForm.module.css';

// import customHooks
import useSearchRef from '../../../hooks/useSearchRef';
import useTranslation from '../../../hooks/useTranslation';
const SearchForm = ({ children }) => {
  const { error, isLoading } = useTranslation;
  console.log(error, isLoading);

  return (
    <Form className={moduleCss.searchForm}>
      {isLoading && <p>로딩중입니다</p>}
      {error && <p>에러가 발생했습니다</p>}
      {!isLoading && children}
    </Form>
  );
};

const SearchButton = () => {
  const inputRef = useSearchRef();
  // fetchLatLong 함수는 locationString 을 기억하는 클로저 함수
  const { fetchLatLong } = useTranslation(inputRef.current.value);

  return (
    <Button
      item='click me !'
      className={moduleCss.searchButton}
      // onClick={}
    />
  );
};

const SearchInput = () => {
  const inputRef = useSearchRef();
  // TODO placeHolder , onChange , className 채우기

  return (
    <Input
      ref={inputRef}
      placeHolder='지역을 입력해주세요'
      className={moduleCss.searchInput}
    />
  );
};

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;

export default SearchForm;
