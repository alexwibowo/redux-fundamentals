import axios from 'axios';
import debounce from 'lodash.debounce';

export function changeOriginAmount(newAmount){
    return {
        type:"CHANGE_ORIGIN_AMOUNT", 
        data:{newAmount: newAmount} 
    };
}

export function fetchConversionRate(payload){
    return (dispatch) => {
        makeConversionAjaxCall(payload, dispatch);      
    };
}


function _makeConversionAjaxCall(payload, dispatch){
    dispatch({type: "REQUEST_CONVERSION_RATE", data: payload});
       
    axios.get('/api/conversion', {
        params: payload
    })
    .then((resp) => {
        dispatch({type: "RECEIVED_CONVERSION_RATE_SUCCESS", data: resp.data});
    })
    .catch(error => {
        dispatch({type: "RECEIVED_CONVERSION_RATE_FAILURE", data: error});
    });
}

// debouncing _makeConversionAjaxCall to avoid UI making lots of call to backend
var makeConversionAjaxCall = debounce(_makeConversionAjaxCall, 300);