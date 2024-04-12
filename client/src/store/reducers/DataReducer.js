import { SEARCH_DATA, FETCHING_DATA } from '../actions/actionTypes';
// TODO inital State localStorage 에서 가져오기

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return { ...state, fethedLocation: action.payload };
    case FETCHING_DATA:
      return { ...state, fetchedWeather: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
