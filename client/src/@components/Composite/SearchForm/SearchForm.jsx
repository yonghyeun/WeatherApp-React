// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { SearchIcon, LoadingCircle } from '../../UI/Bootstraps/Bootstraps';

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
      item={<SearchIcon />}
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

const SearchLoadingButton = ({ width, height }) => {
  return (
    <Button
      item={<LoadingCircle width={width} height={height} />}
      className={moduleCss.searchButton}
    />
  );
};

const SearchErrorButton = ({ width, height }) => {
  return (
    <Button
      item={<LoadingCircle width={width} height={height} />}
      className={moduleCss.searchButton}
    />
  );
};

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;
SearchForm.LoadingButton = SearchLoadingButton;
SearchForm.LoadingInput = SearchLoadingInput;

export default SearchForm;
