const statusReducer = (state, action) => ({ ...state, status: action.type });

export default statusReducer;
