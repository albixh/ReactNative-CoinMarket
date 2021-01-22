import { PORTFOLIO_INPUT_SUCCESS, PORTFOLIO_INPUT_FAIL } from '../constants/actions.js'

const initialState = {
    coinPortfolio: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PORTFOLIO_INPUT_SUCCESS:
            {
                return Object.assign({}, state, {
                    coinPortfolio: action.portfolio,
                });
            }
        case PORTFOLIO_INPUT_FAIL:
            {
                //TODO: handle wrong input
                //return Object.assign({}, state, {
                //    coinPortfolio: null,
                //});
            }

        default:
            return state;
    }
}