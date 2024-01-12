import React, { useState } from "react";

function UsePrevStateHook() {
  let [count, setCount] = useState(0);
  let [countExample, setCountExample] = useState(0);

  const counterHandler = () => {
    for (let index = 0; index < 10; index++) {
      setCount((prevState) => prevState + 1);
    }
  };

  const counterHandler2 = () => {
    // setCountExample(countExample + 1);
    // setCountExample(countExample + 1);
    // setCountExample(countExample + 1);
    // setCountExample(countExample + 1);

    setCountExample((prevState) => prevState + 1);
    setCountExample((prevState) => prevState + 1);
    setCountExample((prevState) => prevState + 1);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={counterHandler}>
        Increment {count}
      </button>
      <br />
      <br />
      <button className="btn btn-success" onClick={counterHandler2}>
        counter {countExample}
      </button>
    </div>
  );
}

export default UsePrevStateHook;
