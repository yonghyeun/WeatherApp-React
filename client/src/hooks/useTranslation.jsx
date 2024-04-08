import { useState } from 'react';
import { APIKEY, URI } from '../@constants/_API';

/**
 * 주어진 주소를 사용하여 위도와 경도를 조회하는 훅
 *
 * @param {String} location - 도로명 , 번지수 주소로 적힌 주소
 * @returns {Object} - 훅 내부 상태를 변경시키는 함수와 상태들을 담은 객체
 * @returns {Function} fetchingLatLong - 카카오 API 를 이용하여 위도 , 경도로 변경하는 함수
 */
const useTranslation = () => {
  const [LatLong, setLatLong] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLatLong = async (location) => {
    try {
      const encodeQuery = encodeURIComponent(location);
      const ENDPOINT = `${URI}/?query=${encodeQuery}`;
      setIsLoading(true);
      const response = await fetch(ENDPOINT, {
        headers: {
          Authorization: APIKEY,
        },
      });

      if (!response.ok)
        throw new Error('카카오 API 네트워크 상태가 불안정합니다');

      const json = await response.json();
      setLatLong(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchLatLong,
    LatLong,
    error,
    isLoading,
  };
};

export default useTranslation;
