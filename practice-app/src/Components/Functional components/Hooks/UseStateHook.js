import React, { useState } from "react";

function UseStateHook() {
  // const arrayState = useState("Tapan");
  // console.log(arrayState);
  // let name = arrayState[0];
  // let setName = arrayState[1];

  const [name, setName] = useState("Tapan"); //destructing
  const [count, setCount] = useState(0);

  const stateHandler = () => {
    setName("Rohit");
  };

  function counterHandler() {
    setCount(count + 1);
  }

  return (
    <div className="d-flex flex-column gap-4">
      <h1>{name}</h1>

      <button className="btn btn-danger w-100" onClick={stateHandler}>
        Click
      </button>

      <button className="btn btn-primary w-100" onClick={counterHandler}>
        Count {count}
      </button>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}

export default UseStateHook;
