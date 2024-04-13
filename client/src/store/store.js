import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
