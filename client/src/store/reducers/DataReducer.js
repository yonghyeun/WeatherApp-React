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
} from './utils/utils';

// TODO initalState 추가하기

const searchParams = new URLSearchParams(window.location.search);
const searchLat = searchParams.get('lat');
const searchLon = searchParams.get('lon');

const initalLocation = {
  lat:
    Number(searchLat) ||
    sessionStorage.getItem('lat') ||
    localStorage.getItem('lat') ||
    '37.5868624440018',
  lon:
    Number(searchLon) ||
    sessionStorage.getItem('lon') ||
    localStorage.getItem('lon') ||
    '127.00060686405',
  addressName:
    sessionStorage.getItem('addressName') ||
    localStorage.getItem('addressName') ||
    '서울특별시 종로구 혜화동',
};

const inistalState = {
  fetchedLocation: initalLocation,
};

const dataReducer = (state = inistalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_LOCATION:
      const fetchedLocation = payload;
      saveToSessionStorage(fetchedLocation);
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
