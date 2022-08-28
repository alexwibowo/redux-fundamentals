var defaultState = {

};

function error(state = defaultState, action){
    switch(action.type){
        case '':
            return {
                ...state
            }
        default: 
            return {
                ...state
            }        
    }
}

export default error;