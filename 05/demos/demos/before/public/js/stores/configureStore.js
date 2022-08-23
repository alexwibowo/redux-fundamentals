import { createStore } from 'redux';


var defaultState = {
    originAmount: '0.00'
};

function amount(state = defaultState, action){
    switch(action.type){
        case 'CHANGE_ORIGIN_AMOUNT':
            return {
                ...state,
                originAmount: action.data
            };
        default:
            return state;
    }
    
}

var store = createStore(amount);
export default store;