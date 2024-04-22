import {
  KaKaoAPI,
  weatherForecastAPI,
  weatherTextAPI,
  tmCoordAPI,
  airAPI,
  airTextAPI,
} from '../@constants/_API';
import {
  getAddressName,
  getLatLon,
  getNxNyFromLatLong,
  getTMCoord,
} from './CoordinateUtils';
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

  const addressName = getAddressName(json);
  const { lat, lon } = getLatLon(json);

  return { addressName, lat, lon };
};

/**
 * 이 함수는 카카오 API 를 통해 얻은 locationObject 를 인수로 받아 기상청 API로 요청을 보내 날씨 정보를 가져온다.
 * 함수 내에선 locationObject 내부에 존재하는 위경도 좌표를 nx,ny 좌표로 변경한 후 사용한다.
 * @param {string} lat - 카카오 API 의 반환값 혹은 URL 경로에 존재하는 쿼리 파라미터 값
 * @param {string} lat - 카카오 API 의 반환값 혹은 URL 경로에 존재하는 쿼리 파라미터 값
 * @returns {Object} - 날씨와 관련된 JSON 데이터로 기상청 API 단기예보를 사용하였음
 */
const fetchForecastFromLocation = async (lat, lon) => {
  const { APIKEY, URI } = weatherForecastAPI;
  const { nx, ny } = getNxNyFromLatLong(lat, lon);
  const { baseDate, baseTime } = getCurrentTime();
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['base_date', baseDate],
    ['nx', nx],
    ['ny', ny],
    ['base_time', baseTime],
    ['pageNo', 1],
    ['numOfRows', 1000],
    ['dataType', 'JSON'],
  ]);

  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);

  if (!response.ok)
    throw new Error('기상청 API 네트워크가 불안정합니다. 다시 시도해주세요');

  const json = await response.json();

  return json;
};

const fetchForecastText = async () => {
  const { APIKEY, URI } = weatherTextAPI;
  const searchParams = new URLSearchParams([
    ['ServiceKey', APIKEY],
    ['dataType', 'JSON'],
    ['stnId', '108'], // stnId 는 지점코드로 108번은 전국을 의미한다.
    // TODO stnId 맨허튼 거리를 이용해 검색 장소와 가장 가까운 지점코드 가져오도록 변경
    ['numOfRows', '10'],
  ]);
  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);

  if (!response.ok)
    throw new Error('기상청 API 네트워크가 불안정합니다.다시 시도해주세요');

  const json = await response.json();
  return json;
};

const fetchNearstStationName = async (lat, lon) => {
  const { APIKEY, URI } = tmCoordAPI;
  const [tmX, tmY] = getTMCoord(lat, lon);
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['returnType', 'JSON'],
    ['tmX', tmX],
    ['tmY', tmY],
    ['ver', '1.1'],
  ]);
  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return json;
};

const fetchAirData = async (stationResponse) => {
  const { APIKEY, URI } = airAPI;
  const { stationName } = stationResponse.response.body.items[0];
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['returnType', 'JSON'],
    ['numOfRows', '1'],
    ['stationName', stationName],
    ['dataTerm', 'DAILY'],
    ['ver', '1.0'],
  ]);
  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error('에어코리아 API 네트워크가 불안정합니다');

  const json = await response.json();
  return json;
};

const fetchAirTextPM = async () => {
  const { APIKEY, URI } = airTextAPI;
  const { searchDate } = getCurrentTime();
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['returnType', 'JSON'],
    ['numOfRows', '100'],
    ['searchDate', searchDate], // ex : 2024-04-15
    ['informCode', 'PM25'],
  ]);
  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error('에어코리아 API 네트워크가 불안정합니다');
  const json = await response.json();
  return json;
};
const fetchAirTextO3 = async () => {
  const { APIKEY, URI } = airTextAPI;
  const { searchDate } = getCurrentTime();
  const searchParams = new URLSearchParams([
    ['serviceKey', APIKEY],
    ['returnType', 'JSON'],
    ['numOfRows', '100'],
    ['searchDate', searchDate], // ex : 2024-04-15
    ['informCode', 'O3'],
  ]);
  const ENDPOINT = `${URI}?${searchParams.toString()}`;
  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error('에어코리아 API 네트워크가 불안정합니다');
  const json = await response.json();
  return json;
};

export {
  fetchLocationFromString,
  fetchForecastFromLocation,
  fetchForecastText,
  fetchNearstStationName,
  fetchAirData,
  fetchAirTextPM,
  fetchAirTextO3,
};
