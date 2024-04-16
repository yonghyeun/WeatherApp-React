import {
  FETCHING_AIR,
  FETCHING_AIRTEXT,
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
} from '../actions/actionTypes';
// TODO inital State localStorage 에서 가져오기

import {
  getWeatherData,
  getAirData,
  getParsingWeatherText,
  getParsingAirText,
} from './utils';

// TODO initalState 추가하기

const dataReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_LOCATION:
      const fetchedLocation = payload;
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
