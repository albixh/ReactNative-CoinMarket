import { PORTFOLIO_INPUT_SUCCESS, PORTFOLIO_INPUT_FAIL } from '../constants/actions.js'
import { isNumeric } from '../helper'

//handle user input for portfolio
export default function PortfolioInputAction(portfolio, coinSymbol, input) {
    if (isNumeric(input)) {
        for (let coin of portfolio) {
            if (coin[0] === coinSymbol) {
                coin[1] = parseFloat(input);
                break;
            }
        };
        return dispatch => {
            dispatch({ type: PORTFOLIO_INPUT_SUCCESS, portfolio: portfolio })
        }
    }
    else
        return dispatch => {
            dispatch({ type: PORTFOLIO_INPUT_FAIL })
        }
}