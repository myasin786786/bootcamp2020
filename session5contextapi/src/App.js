import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './counterContext';

function App() {
  let countState=useState(1);    // let [count,setCount]
  // let [count,setCount]=useState(30);
  return (
    < CounterContext.Provider value={countState}>
        <div >
     <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
