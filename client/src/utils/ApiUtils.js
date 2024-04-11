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
  if (!json.meta.total_count) {
    // ! 카카오 API 는 올바른 검색 결과값이 아니더라도 200 상태코드와 함께 빈 데이터를 보내준다.
    // ! 우리는 404 상태 코드를 보내주기로 하자
    const error = new Error('올바른 지역명 검색 양식이 아닙니다');
    error.status = 404;
    throw error;
  }

  return json;
};

/**
 * 이 함수는 카카오 API 를 통해 얻은 locationObject 를 인수로 받아 기상청 API로 요청을 보내 날씨 정보를 가져온다.
 * 함수 내에선 locationObject 내부에 존재하는 위경도 좌표를 nx,ny 좌표로 변경한 후 사용한다.
 * @param {Object} locationObject - location 에 대한 정보가 담긴 객체, 주로 카카오API에서 제공하는 location 객체
 * @returns {Object} - 날씨와 관련된 JSON 데이터로 기상청 API 단기예보를 사용하였음
 */
const fetchForecastFromLocation = async (locationObject) => {
  const { APIKEY, URI } = weatherForecastAPI;
  const { nx, ny } = getNxNyFromLatLong(locationObject);
  const { baseDate } = getCurrentTime();
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['base_date', baseDate],
    ['nx', nx],
    ['ny', ny],
    ['base_time', '0500'], // ! 기상청의 baseTime 은 항상 해당 일 0500 으로 고정
    ['pageNo', 1],
    ['numOfRows', 1000],
    ['dataType', 'JSON'],
  ]);

  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);

  if (!response.ok)
    throw new Error('기상청 API 네트워크가 불안정합니다. 다시 시도해주세요');

  const json = await response.json();
  // TODO 세션 스토리지에 캐싱하는 로직 추가하기

  return json;
};

export { fetchLocationFromString, fetchForecastFromLocation };
