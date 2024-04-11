import { SEARCH_LOCATION, FETCHING_DATA } from '../actions/actionTypes';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return { ...state, location: action.payload };
    case FETCHING_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
