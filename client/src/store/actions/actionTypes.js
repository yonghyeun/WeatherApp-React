// DATA Fetching 을 위한 action Types
const FETCHING_LOCATION = 'FETCHING_LOCATION'; // KaKaO API 에서 가져온 정제된 양식의 텍스트
const FETCHING_WEATHER = 'FETCHING_WEATHER'; // 기상청 API 에서 가져온 날씨 데이터
const FETCHING_WEATHERTEXT = 'FETCHING_WEATHERTEXT'; // 기상청 API 에서 가져온 날씨 정보 텍스트;
const FETCHING_AIR = 'FETCHING_AIR'; // 에어코리아에서 제공하는 미세먼지 실시간 측정 정보
const FETCHING_AIRTEXT = 'FETCHING_AIRTEXT'; // 에어코리아에서 제공하는 PM2.5 , O3 통보 텍스트
// 테마 버튼을 위한 action Types
const TOGGLE_THEME = 'TOGGLE_THEME';
// fetching status 와 관련된 action Types
const API_STATUS = 'API_STATUS';
// 시간 , 날짜 변경과 관련된 action Types
const CHANGE_DATE = 'CHANGE_DATE';
const CHANGE_TIME = 'CHANGE_TIME';

export {
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
  TOGGLE_THEME,
  API_STATUS,
  FETCHING_AIR,
  FETCHING_AIRTEXT,
  CHANGE_DATE,
  CHANGE_TIME,
};
