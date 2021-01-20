import { combineReducers } from 'redux';
import coinMarketDataReducer from './CoinMarketDataReducer';
import portfolioInputReducer from './PortfolioInputReducer';


export default combineReducers({
  coinMarket: coinMarketDataReducer,
  coinPortfolio: portfolioInputReducer
});