// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

// import moduleCss
import moduleCss from './SearchForm.module.css';

// import customHooks
import useSearchRef from '../../../hooks/useSearchRef';

const SearchForm = ({ children }) => {
  return <Form className={moduleCss.searchForm}>{children}</Form>;
};

const SearchButton = ({ onClick }) => {
  return (
    <Button
      item='click me !'
      className={moduleCss.searchButton}
      onClick={onClick}
    />
  );
};

const SearchInput = () => {
  const inputRef = useSearchRef();

  return (
    <Input
      ref={inputRef}
      placeHolder='지역을 입력해주세요'
      className={moduleCss.searchInput}
    />
  );
};

const SearchLoadingInput = () => {
  const inputRef = useSearchRef();
  return (
    <Input
      ref={inputRef}
      placeHolder='지역을 입력해주세요'
      className={moduleCss.searchInput}
      readOnly={true}
    />
  );
};

const SearchLoadingButton = () => {
  return <Button item='로딩중' className={moduleCss.SearchButton} />;
};

// const SearchErrorInput = ({placeHolder}) => {
//   const inputRef = useSearchRef();
//   return (
//     <Input
//       ref={inputRef}
//       placeHolder={inputRef.current.value}
//       className={moduleCss.searchInput}
//       readOnly={true}
//     />
//   );
// };

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;
SearchForm.LoadingButton = SearchLoadingButton;
SearchForm.LoadingInput = SearchLoadingInput;
// SearchForm.ErrorInput = SearchErrorInput;

export default SearchForm;
