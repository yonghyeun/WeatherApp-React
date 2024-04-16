import dataReducer from './reducers/DataReducer';
import statusReducer from './reducers/StatusReducer';
import themeReducer from './reducers/ThemeReducer';
import dateReducer from './reducers/DateReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  status: statusReducer,
  data: dataReducer,
  date: dateReducer,
  theme: themeReducer,
});

export default rootReducer;
