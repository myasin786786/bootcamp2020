import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';
//transaction bascically used for global storage
const   initialTransactions =[
    {amount: 500 ,desc :"Cash"},
    {amount: -50 ,desc :"Book"},
    {amount: 100 ,desc :"Camera"},
    {amount: -200 ,desc :"Utility Bills"}
]

export const TransactionContext=createContext(initialTransactions);



export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(TransactionReducer,initialTransactions);

  function addTransaction(transObj ){
        dispatch({
            type: "Add TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc 
            },
        })
    }
return(
    <TransactionContext.Provider value={{
        transactions:state,
        addTransaction
    }}>

      {children}
    </TransactionContext.Provider>
)
}