import { combineReducers } from 'redux';
import coinMarketReducer from './CoinMarketReducer';

export default combineReducers({
  coinMarket: coinMarketReducer
});