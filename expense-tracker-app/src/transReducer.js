
const TransactionReducer=((state,action)=>{
    switch(action.type){
        case "Add TRANSACTION":{

            return[action.payload , ...state]

        }
        default:
             return state;
    }

})

export default TransactionReducer;