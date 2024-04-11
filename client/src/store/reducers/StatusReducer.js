import { OK, LOADING, ERROR } from '../actions/actionTypes';

// statusReducer 는 너무 단순하네 ..

const statusReducer = (state, action) => ({ ...state, status: action.type });

export default statusReducer;
