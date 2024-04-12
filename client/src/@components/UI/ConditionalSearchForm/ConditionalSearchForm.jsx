// import Components
import SearchForm from '../../Composite/SearchForm/SearchForm';
// import CustomHooks
import useAPIStatus from '../../../hooks/useAPIStatus';
const ConditionalSearchForm = () => {
  const status = useAPIStatus();
  switch (status) {
    case 'LOADING':
      return <SearchForm.Loading />;
    case 'OK':
      return <SearchForm.Normal />;
    default:
      return <SearchForm.Error />;
  }
};

export default ConditionalSearchForm;
