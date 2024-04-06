import { createContext, useRef } from 'react';

const SearchRefContext = createContext(null);

const SearchRefProvider = ({ children }) => {
  const inputRef = useRef(null);

  return (
    <SearchRefContext.Provider value={inputRef}>
      {children}
    </SearchRefContext.Provider>
  );
};

export { SearchRefProvider, SearchRefContext };
