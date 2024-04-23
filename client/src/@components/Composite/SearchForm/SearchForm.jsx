// import Components
import Form from '../../UI/Form/Form';
import { SearchIcon, LoadingCircle } from '../../UI/Bootstraps/Bootstraps';
import { MdOutlineSmsFailed } from 'react-icons/md';
// import moduleCss
import moduleCss from './SearchForm.module.css';

// import customHooks
import useSearchRef from '../../../hooks/useSearchRef';
import useAPIStatus from '../../../hooks/useAPIStatus';
import useHandleClick from '../../../hooks/useHandleClick';
const SearchForm = ({ children }) => {
  return <Form className={moduleCss.searchForm}>{children}</Form>;
};

const SearchButton = ({ onClick }) => {
  return (
    <button
      type='button'
      className='btn btn-outline-secondary'
      onClick={onClick}
    >
      <SearchIcon />
    </button>
  );
};

const SearchInput = () => {
  const inputRef = useSearchRef();

  return (
    <input
      className='form-control mr-sm-2'
      type='search'
      placeholder='지역명을 입력해주세요'
      aria-label='Search'
      ref={inputRef}
    ></input>
  );
};

const SearchLoadingInput = () => {
  const inputRef = useSearchRef();

  return (
    <input
      className='form-control mr-sm-2'
      type='search'
      readOnly={true}
      defaultValue={inputRef.current.value}
      aria-label='Search'
      ref={inputRef}
    ></input>
  );
};

const SearchLoadingButton = () => {
  return (
    <button type='button' className='btn btn-outline-success'>
      <LoadingCircle />
    </button>
  );
};

const SearchErrorButton = () => {
  return (
    <button type='button' className='btn btn-outline-danger'>
      <MdOutlineSmsFailed />
    </button>
  );
};

const SearchErrorInput = () => {
  const inputRef = useSearchRef();
  const message = useAPIStatus();

  return (
    <input
      className='form-control mr-sm-2'
      type='search'
      readOnly={true}
      defaultValue={message}
      aria-label='Search'
      ref={inputRef}
    ></input>
  );
};

const SearchNormal = () => {
  const { fetchingLocation, navigateToCardPage } = useHandleClick();

  return (
    <SearchForm>
      <SearchInput />
      <SearchButton
        onClick={async () => {
          await fetchingLocation();
          navigateToCardPage();
        }}
      />
    </SearchForm>
  );
};

const SearchLoading = () => {
  return (
    <SearchForm>
      <SearchLoadingInput />
      <SearchLoadingButton />
    </SearchForm>
  );
};

const SearchError = () => {
  const error = useAPIStatus();
  return (
    <SearchForm>
      <SearchErrorInput error={error} />
      <SearchErrorButton />
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
