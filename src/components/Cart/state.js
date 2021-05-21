import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './actions';

const cartState = {
  cartProducts: [],
  cartCount: 0
}

export const cart = (state=cartState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.data],
        cartCount: state.cartCount+1
      }
    case REMOVE_FROM_CART:
      const { cartProducts } = state;
      cartProducts.splice(action.data, 1);
      return {
        ...state,
        cartProducts,
        cartCount: state.cartCount-1
      }
    case CLEAR_CART:
      return {
        ...state,
        cartProducts: [],
        cartCount: 0
      }
    default:
      return state;
  }
}