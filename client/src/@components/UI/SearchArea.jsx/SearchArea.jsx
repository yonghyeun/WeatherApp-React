import ConditionalSearchForm from '../ConditionalSearchForm/ConditionalSearchForm';
import { SearchRefProvider } from '../../../context/SearchRefProvider';

const SearchArea = () => {
  return (
    <SearchRefProvider>
      <ConditionalSearchForm />
    </SearchRefProvider>
  );
};

export default SearchArea;
