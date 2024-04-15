import {
  FETCHING_AIR,
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
} from '../actions/actionTypes';
// TODO inital State localStorage 에서 가져오기

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return { ...state, fethedLocation: action.payload };
    case FETCHING_WEATHER:
      return { ...state, fetchedWeather: action.payload };
    case FETCHING_WEATHERTEXT:
      return { ...state, fetchedWeatherText: action.payload };
    case FETCHING_AIR:
      return { ...state, fetchedAir: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
