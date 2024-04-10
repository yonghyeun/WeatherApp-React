// import Components
import SearchForm from '../../Composite/SearchForm/SearchForm';
// import CustomHooks
import useWeather from '../../../hooks/useWeather';
import useSearchRef from '../../../hooks/useSearchRef';
const ConditionalSearchForm = () => {
  const inputRef = useSearchRef();
  // TODO LatLong 값 전역으로 빼기
  const { fetchWeather, weather, error, isLoading } = useWeather();

  const handleClick = () => {
    const locationString = inputRef.current?.value;
    if (locationString) fetchWeather(locationString);
  };

  if (isLoading) return <SearchForm.Loading />;
  if (error) return <SearchForm.Error error={error.message} />;
  return <SearchForm.Normal onClick={handleClick} />;
};

export default ConditionalSearchForm;
