// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

// import moduleCss
import moduleCss from './SearchForm.module.css';

// import customHooks
import useSearchRef from '../../../hooks/useSearchRef';

import { SearchRefProvider } from '../../../context/SearchRefProvider';

const SearchForm = ({ children }) => {
  return (
    <SearchRefProvider>
      <Form className={moduleCss.searchForm}>{children}</Form>
    </SearchRefProvider>
  );
};

const SearchButton = () => {
  // TODO onClick , item , className 채우기
  const inputRef = useSearchRef();

  return (
    <Button
      item='click me !'
      className={moduleCss.searchButton}
      onClick={() => {
        console.log(inputRef.current.value);
      }}
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
