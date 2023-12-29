import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import cryptoReducers from '../reducers/crypto.reducers';

const reducer = combineReducers({
  crypto: cryptoReducers
})
const store = configureStore({
  reducer,
})
export default store;