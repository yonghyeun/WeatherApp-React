import { KaKaoAPI, weatherForecastAPI } from '../@constants/_API';
import { getNxNyFromLatLong } from './CoordinateUtils';
import { getCurrentTime } from './DateUtils';

/**
 * 함수는 문자열로 이뤄진 문자열을 받아 카카오 API를 이용해 위치 정보가 담긴 객체를 반환하는 함수
 * @param {String} locationString - 위치를 의미하는 문자열
 * @returns {Object} - KaKao API 에서 제공하는 위치 정보가 담긴 객체
 */
const fetchLocationFromString = async (locationString) => {
  const { APIKEY, URI } = KaKaoAPI;
  try {
    const encodeQuery = encodeURIComponent(locationString);
    const ENDPOINT = `${URI}?query=${encodeQuery}`;
    const response = await fetch(ENDPOINT, {
      headers: {
        Authorization: APIKEY,
      },
    });

    if (!response.ok)
      throw new Error('카카오 API 네트워크가 불안정합니다. 다시 시도해주세요');

    const json = await response.json();

    if (!json.documents) {
      // ! 카카오 API 는 올바른 검색 결과값이 아니더라도 200 상태코드와 함께 빈 데이터를 보내준다.
      // ! 우리는 404 상태 코드를 보내주기로 하자
      const error = new Error('올바른 지역명 검색 양식이 아닙니다');
      error.status = 404;
      throw error;
    }

    return json;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`${e.message} Status: ${e.status || 'Unknown'}`);
    } else {
      throw new Error('알 수 없는 네트워크 오류가 발생했습니다');
    }
  }
};

const fetchForecastFromLocation = async (locationObject) => {
  try {
    const { APIKEY, URI } = weatherForecastAPI;
    const { nx, ny } = getNxNyFromLatLong(locationObject);
    const { baseDate, baseTime } = getCurrentTime();

    const ENDPOINT = `${URI}$searviceKey=${APIKEY}&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;
    const response = await fetch(ENDPOINT);

    if (!response.ok)
      throw new Error('기상청 API 네트워크가 불안정합니다. 다시 시도해주세요');

    const json = await response.json();
    return json;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`${error.message} Status: ${error.status || 'Unknown'}`);
    } else {
      throw new Error('알 수 없는 네트워크 오류가 발생했습니다');
    }
  }
};

export { fetchLocationFromString, fetchForecastFromLocation };
