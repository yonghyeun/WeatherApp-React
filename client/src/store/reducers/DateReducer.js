import { CHANGE_DATE, CHANGE_TIME } from '../actions/actionTypes';

const dateReducer = (state = {}, action) => {
  const { type, payload } = action;
  // TODO payload 관련 메소드 추가하기
  switch (type) {
    case CHANGE_DATE:
      return { ...state, date: payload };
    case CHANGE_TIME:
      return { ...state, time: payload };
    default:
      break;
  }
};

export default dateReducer;
