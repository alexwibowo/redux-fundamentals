import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

var defaultState = {
    originAmount: '0.00'
};

function amount(state = defaultState, action) {
  console.log('state', state)
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
            ...state,
            originAmount: action.data.newAmount
        }
    }

    return state;
}

var store = createStore(
    amount,
    applyMiddleware(logger)
);

export default store;
