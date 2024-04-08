// import Components
import SearchForm from '../../Composite/SearchForm/SearchForm';
// import CustomHooks
import useTranslation from '../../../hooks/useTranslation';
import useSearchRef from '../../../hooks/useSearchRef';
const SearchArea = () => {
  const inputRef = useSearchRef();
  const { fetchLatLong, LatlLong, error, isLoading } = useTranslation();

  const handleClick = () => {
    const locationString = inputRef.current?.value;
    if (locationString) fetchLatLong(locationString);
  };

  return (
    <SearchForm>
      {isLoading && (
        <>
          <SearchForm.LoadingInput />
          <SearchForm.LoadingButton />
        </>
      )}
      {error && (
        <>
          {/* TODO error 시 컴포넌트 생성하기 */}
          <p>다시 시도해주세요</p>
        </>
      )}
      {!isLoading && !error && (
        <>
          <SearchForm.Input />
          <SearchForm.Button onClick={handleClick} />
        </>
      )}
    </SearchForm>
  );
};

export default SearchArea;
