var defaultState = {
    originAmount: '0.00',
    originCurrency: 'USD',
    destinationCurrency: 'EUR',
    destinationAmount: '0.00',
    conversionRate: 1.5,
             feeAmount: 0.00,
             totalCost: 0.00
};


function amount(state = defaultState, action) {
    switch (action.type){
        case 'CHANGE_ORIGIN_AMOUNT':
            return {
                ...state,
                originAmount: action.data.newAmount
            }
        case 'CHANGE_DESTINATION_AMOUNT':
            return {
                ...state,
                destinationAmount: action.data.newAmount
            }
        case 'RECEIVED_CONVERSION_RATE':
            return {
                ...state,
                conversionRate: action.data.xRate,
                destinationAmount: action.data.destAmount
            }
        case 'RECEIVED_CONVERSION_RATE_SUCCESS':
            return {
                ...state,                
                originAmount: action.data.originAmount,
                conversionRate: action.data.xRate,
                destinationAmount: action.data.destAmount
            }
        case "RECEIVED_FEES_SUCCESS":
            const newFeeAmount = action.data.feeAmount;
            const newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);
            return {
                ...state,
                feeAmount: newFeeAmount,
                totalCost: newTotal
            }   
        case "CHANGE_ORIGIN_CURRENCY": 
            return {
                ...state,
                originCurrency: action.data
            }   
        case "CHANGE_DESTINATION_CURRENCY":     
            return {
                ...state,
                destinationCurrency: action.data
            }                    
        default:
            return state
    }

}

export default amount;