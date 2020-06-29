import React, {useState} from 'react';
import {Message} from './message';
// import logo from './logo.svg';
import './App.css';

export default function App() {
  let [count,setCount]=useState(1);
  let [isMorning, setMorning]=useState(false);
  
  return (
  <div className={`box ${isMorning ? 'dayLight' : ''}`}>
    <h1>Have a Good {isMorning ? 'Morning' : 'Night'}</h1>
   <Message counter={count}/>
    <br />
  <button onClick={()=> setCount(count + 1)}>Update value</button>

  <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
  </div>  
  
  );
}

// export default App;
