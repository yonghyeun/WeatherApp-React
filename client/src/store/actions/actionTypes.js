// DATA Fetching 을 위한 action Types
const FETCHING_LOCATION = 'FETCHING_LOCATION'; // KaKaO API 에서 가져온 정제된 양식의 텍스트
const FETCHING_WEATHER = 'FETCHING_WEATHER'; // 기상청 API 에서 가져온 날씨 데이터
const FETCHING_WEATHERTEXT = 'FETCHING_WEATHERTEXT'; // 기상청 API 에서 가져온 날씨 정보 텍스트;

// 테마 버튼을 위한 action Types
const TOGGLE_THEME = 'TOGGLE_THEME';
// fetching status 와 관련된 action Types
const API_STATUS = 'API_STATUS';

export {
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
  TOGGLE_THEME,
  API_STATUS,
};
