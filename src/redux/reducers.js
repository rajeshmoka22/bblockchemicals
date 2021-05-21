import { combineReducers } from 'redux';
import { cart } from '../components/Cart/state';

const authState = {
  isAuthenticated: false
}

const auth = (state=authState, action) => {
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

export default combineReducers({ auth, cart });