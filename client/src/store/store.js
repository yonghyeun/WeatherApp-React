import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);
console.log(store.getState((state) => state));
export default store;
