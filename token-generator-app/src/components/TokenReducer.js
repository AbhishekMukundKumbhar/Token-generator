
export const TokenReducer = (state,action) =>{
    switch(action.type){
        case "GENERATE" : {
            return [...state].concat(action.payload);
            break;
        }
        case "CLEAR" : {
            return [];
            break;
        }
        default : return state;
    }
}