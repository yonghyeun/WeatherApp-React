import { CHANGE_DATE, CHANGE_TIME } from '../actions/actionTypes';
import { getTime } from './utils';
import { getCurrentTime } from '../../utils/DateUtils';

const { fullDate, time } = getCurrentTime();

const dateReducer = (state = { date: fullDate, time }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATE:
      return { ...state, date: payload };
    case CHANGE_TIME:
      const time = getTime(payload);
      return { ...state, time };
    default:
      return state;
  }
};

export default dateReducer;
