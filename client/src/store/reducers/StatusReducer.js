import { API_STATUS } from '../actions/actionTypes';

const initalState = {};
const statusReducer = (state = initalState, action) => {
  switch (action.type) {
    case API_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default statusReducer;
