import React from 'react';
// import './App.css'
// import Dinner from './dinner.js'

function Dinner(probs){
    return (
        <div>
          <h1>Today we are serving {probs.dishName}</h1>
          <h1>Today we are serving {probs.sweetDish}</h1>
       
        </div>
    );

}

export default Dinner;

