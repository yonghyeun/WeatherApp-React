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
      placeholder='지역을 입력해주세요'
      className={moduleCss.searchInput}
    />
  );
};

const SearchLoadingInput = () => {
  const inputRef = useSearchRef();
  return (
    <Input
      ref={inputRef}
      className={moduleCss.searchInput}
      defaultValue={inputRef.current.value}
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
  // TODO 에러 발생 시 사용할 아이콘 찾기
  return (
    <Button
      item={<SearchIcon width={width} height={height} />}
      className={moduleCss.searchButton}
    />
  );
};

const SearchErrorInput = ({ error }) => {
  const inputRef = useSearchRef();

  return (
    <Input
      ref={inputRef}
      className={moduleCss.searchInput}
      defaultValue={error}
      readOnly={true}
    />
  );
};

const SearchNormal = ({ onClick }) => {
  return (
    <SearchForm>
      <SearchInput />
      <SearchButton onClick={onClick} />
    </SearchForm>
  );
};

const SearchLoading = ({ width, height }) => {
  return (
    <SearchForm>
      <SearchLoadingInput />
      <SearchLoadingButton width={(width, height)} />
    </SearchForm>
  );
};

const SearchError = ({ width, height, error }) => {
  return (
    <SearchForm>
      <SearchErrorInput error={error} />
      <SearchErrorButton width={(width, height)} />
    </SearchForm>
  );
};

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;

SearchForm.LoadingButton = SearchLoadingButton;
SearchForm.LoadingInput = SearchLoadingInput;
SearchForm.ErrorInput = SearchErrorInput;
SearchForm.ErrorButton = SearchErrorButton;

SearchForm.Normal = SearchNormal;
SearchForm.Loading = SearchLoading;
SearchForm.Error = SearchError;

export default SearchForm;
