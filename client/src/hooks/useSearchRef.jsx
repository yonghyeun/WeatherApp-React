import { useContext } from 'react';
import { SearchRefContext } from '../context/SearchRefProvider';

const useSearchRef = () => {
  const inputRef = useContext(SearchRefContext);
  return inputRef;
};

export default useSearchRef;
