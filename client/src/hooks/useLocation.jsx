import { useState } from 'react';
import { APIKEY, URI } from '../@constants/_API';

const useLocation = (query) => {
  const encodeQuery = encodeURIComponent(query);
  const ENDPOINT = `${URI}/?query=${encodeQuery}`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(ENDPOINT, {
        headers: {
          Authorization: APIKEY,
        },
      });

      if (!response.ok)
        throw new Error('카카오 API 네트워크 상태가 불안정합니다');

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchLocation,
    data,
    error,
    isLoading,
  };
};

export default useLocation;
