// import Components
import SearchForm from '../../Composite/SearchForm/SearchForm';
// import CustomHooks
import useTranslation from '../../../hooks/useTranslation';
import useSearchRef from '../../../hooks/useSearchRef';
const ConditionalSearchForm = () => {
  const inputRef = useSearchRef();
  // TODO LatLong 값 전역으로 빼기
  const { fetchLatLong, LatlLong, error, isLoading } = useTranslation();

  const handleClick = () => {
    const locationString = inputRef.current?.value;
    if (locationString) fetchLatLong(locationString);
  };

  if (isLoading) return <SearchForm.Loading />;
  if (error) return <SearchForm.Error />;
  return <SearchForm.Normal onClick={handleClick} />;
};

export default ConditionalSearchForm;
