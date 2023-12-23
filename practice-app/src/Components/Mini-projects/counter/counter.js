import { useState } from 'react'

function CounterValue() {

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
            <div>
            <h1>
      Hello world!
    </h1>
                
                <button onClick={addValue}>add value</button>
                <h1>added Value: {counter}</h1>
                <br />
                <br />
                <button onClick={substractValue} >substract value</button>
                <h1>substracted Value: {counter}</h1>
            </div>
        </>
    );
}

export default CounterValue;
