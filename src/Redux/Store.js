import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store; // Export as default

// now in this line of code we pass the reducer function

// This store is used to give the access entire app and our store is empty so there is need of some reducer.
// to give the access to entire app of the store so we impot  the store in to index.js and as we as we provide the provider and wrape in to App
// we create a reducer that handle the increment and decrement 


//$$$$   What are reducer ???
//***Reducer are the simple function that have the 2 parameter that is "State and  Action" 