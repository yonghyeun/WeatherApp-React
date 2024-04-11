import dataReducer from './reducers/DataReducer';
import statusReducer from './reducers/StatusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  status: statusReducer,
  data: dataReducer,
});

export default rootReducer;
