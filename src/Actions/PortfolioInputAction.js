import { PORTFOLIO_INPUT_SUCCESS, PORTFOLIO_INPUT_FAIL } from '../constants/actions.js'

//handle user input for portfolio
export default function PortfolioInputAction(portfolio) {
    return dispatch => {
        dispatch({ type: PORTFOLIO_INPUT_SUCCESS, portfolio: portfolio }) //TODO: handle invalid inputs
    }
}