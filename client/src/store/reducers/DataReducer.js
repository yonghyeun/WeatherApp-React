import {
  FETCHING_AIR,
  FETCHING_AIRTEXT,
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
} from '../actions/actionTypes';
// TODO inital State localStorage 에서 가져오기

import {
  saveToSessionStorage,
  getWeatherData,
  getAirData,
  getParsingWeatherText,
  getParsingAirText,
} from './utils';

// TODO initalState 추가하기

const inistalState = {
  fetchedLocation: {
    lat:
      new URLSearchParams(window.location.search).get('lat') ||
      sessionStorage.getItem('lat') ||
      localStorage.getItem('lat') ||
      '127.00060686405',
    lon:
      new URLSearchParams(window.location.search).get('lon') ||
      sessionStorage.getItem('lon') ||
      localStorage.getItem('lon') ||
      '37.5868624440018',
    // TODO addressName 도 따로 가져오도록 변경하기
    addressName:
      sessionStorage.getItem('addressName') ||
      localStorage.getItem('addressName') ||
      '서울특별시 종로구 혜화동',
  },
};

const dataReducer = (state = inistalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_LOCATION:
      const fetchedLocation = payload;
      saveToSessionStorage(fetchedLocation);
      console.log(fetchedLocation);
      return { ...state, fetchedLocation };
    case FETCHING_WEATHER:
      const fetchedWeather = getWeatherData(payload);
      return { ...state, fetchedWeather };
    case FETCHING_WEATHERTEXT:
      const fetchedWeatherText = getParsingWeatherText(payload);
      return { ...state, fetchedWeatherText };
    case FETCHING_AIR:
      const fetchedAir = getAirData(payload);
      return { ...state, fetchedAir };
    case FETCHING_AIRTEXT:
      const fetchedAirText = getParsingAirText(payload);
      return { ...state, fetchedAirText };
    default:
      return state;
  }
};

export default dataReducer;
