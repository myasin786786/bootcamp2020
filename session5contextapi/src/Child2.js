import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';


const Child2= () => {

    let [state, dispatch]=useReducer(CounterReducer,1);
    console.log(state);
    
    return(
        <div>
            <h3>Value of Reducer state is: {state}</h3>
   <button onClick={()=>dispatch('INCREMENT') }>Increment Reducer</button>

        </div>
    )
}

export default Child2;