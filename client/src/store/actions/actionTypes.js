// DATA Fetching 을 위한 action Types
const SEARCH_DATA = 'SEARCH_DATA'; // KaKaO API 에서 가져온 정제된 양식의 텍스트
const FETCHING_DATA = 'FETCHING_DATA'; // 기상청 API 에서 가져온 날씨 데이터
// 테마 버튼을 위한 action Types
const TOGGLE_THEME = 'TOGGLE_THEME';
// fetching status 와 관련된 action Types
const API_STATUS = 'API_STATUS';

export { SEARCH_DATA, FETCHING_DATA, TOGGLE_THEME, API_STATUS };
