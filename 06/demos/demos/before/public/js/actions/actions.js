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

export function fetchFee(payload){
    return (dispatch) => {
        makeFetchFee(payload, dispatch);        
    };
}

function _makeFetchFee(payload, dispatch){
    dispatch({type: "REQUEST_FEES", data: payload});
    axios.get('/api/fees', {
        params: payload
    })
    .then((resp) => {
        dispatch({type: "RECEIVED_FEES_SUCCESS", data: resp.data});         
    })
    .catch(error => {
        dispatch({type: "RECEIVED_FEES_FAILURE", data: error});
    });
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
var makeFetchFee = debounce(_makeFetchFee, 300);