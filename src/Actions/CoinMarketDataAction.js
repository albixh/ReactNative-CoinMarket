import axios from 'axios';
import { GET_COIN_MARKET_DATA, GET_COIN_MARKET_DATA_SUCCESS, GET_COIN_MARKET_DATA_FAIL } from '../constants/http.js'
import { API_URL_SANDBOX, API_KEY_SANDBOX, API_URL_PRO, API_KEY_PRO, COIN_LIMIT } from '../constants/api.js'

//fetch coin market data from coin market cap api
export default function CoinMarketDataAction() {
  return dispatch => {
    dispatch({ type: GET_COIN_MARKET_DATA })
    //TODO: change to custom header option for production
    return axios.get(`${API_URL_SANDBOX}/v1/cryptocurrency/listings/latest?limit=${COIN_LIMIT}&CMC_PRO_API_KEY=${API_KEY_SANDBOX}`)
      .then(response => {
        dispatch({ type: GET_COIN_MARKET_DATA_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: GET_COIN_MARKET_DATA_FAIL, payload: error })
      })
  }
}