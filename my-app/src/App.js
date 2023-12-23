import Demo from './Demo'
import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0);

  function addValue() {
    counter = ++counter;
    setCounter(counter);
  }

  function substractValue() {
    counter = --counter;
    setCounter(counter);
  }

  return (
    <>
      <Demo />
      <div>
        <button onClick={addValue} >add value</button>
        <h1>added Value: {counter}</h1>
        <br />
        <br />
        <button onClick={substractValue} >substract value</button>
        <h1>substracted Value: {counter}</h1>
      </div>
    </>
  );
}

export default App;
