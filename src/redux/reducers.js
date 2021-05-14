import { combineReducers } from 'redux';

const authState = {
  isAuthenticated: false
}

const authReducer = (state=authState, action) => {
  switch(action.type){
    case 'UPDATE_AUTH':
      return ({
        ...state,
        isAuthenticated: action.data
      });
    default:
      return state;
  }
}

export default combineReducers({ authReducer });