import { GET_COIN_MARKET_DATA, GET_COIN_MARKET_DATA_SUCCESS, GET_COIN_MARKET_DATA_FAIL } from '../constants/http.js'

const initialState = {
  data: [],
  meta: {
    isLoading: null,
    hasError: false,
    errorMessage: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COIN_MARKET_DATA:
      return Object.assign({}, state, {
        data: null,
        meta: {
          isLoading: true,
          hasError: false,
          errorMessage: null
        }
      });

    case GET_COIN_MARKET_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        meta: {
          isLoading: false,
          hasError: false,
          errorMessage: null
        }
      });

    case GET_COIN_MARKET_DATA_FAIL:
      return Object.assign({}, state, {
        data: action.payload,
        meta: {
          isLoading: false,
          hasError: true,
          errorMessage: action.err
        }
      });

    default:
      return state;
  }
}