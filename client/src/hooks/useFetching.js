import { useState, useEffect } from 'react';

const useFetching = (endpoint) => {
  const [data, setData] = useState('');
  console.log(endpoint);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch(endpoint);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetching();
  }, [endpoint]);
  return data;
};

export default useFetching;
