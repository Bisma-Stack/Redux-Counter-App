import React from 'react';
import './index.css';
import {useDispatch} from "react-redux";
import Counter from './Component/Counter';


const App = () => {
  const dispatch= useDispatch();
  return (
    <div className='App'>
      <h2>Kick Start Your Journey With This Counter</h2>
      <h3>From Zero to Hero</h3>
      <button onClick={e=>dispatch({type:'INCREMENT'})}>Increment</button>
      <Counter/>
      <button onClick={e=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default App;


// After that we create a component that show the count and its name is count
  