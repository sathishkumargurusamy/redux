import { cartReducer } from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ carts: cartReducer });

export default rootReducer;
