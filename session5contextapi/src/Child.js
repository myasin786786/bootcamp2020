import React, { useContext } from 'react';
import counterContext from './counterContext';


const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue)
    return (

        <div>
            <h1>This is First Child Using counterContext</h1>
            <h2>Counter Value is: {counterValue[0]}</h2>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament Context</button>

        </div>
    )


}
export default Child;