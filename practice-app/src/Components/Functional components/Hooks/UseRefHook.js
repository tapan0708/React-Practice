import React, { useRef, useState } from "react";

function UseRefHook() {
  const [count, setCount] = useState(0);

  let refContainer = useRef(0);
  let inputRef = useRef("");

  const stateIncHandler = () => {
    setCount(count + 1); //update and re-render UI
  };

  const refIncHandler = () => {
    refContainer = refContainer + 1; //Not update or re-render UI
    console.log(refContainer.current);
  };

  const inputRefHandler = () => {
    //Dom attribute manipulation
    inputRef.current.focus();
    // inputRef.current.style.backgroundColor = "red";
    inputRef.current.classList.add("bg-success");
    inputRef.current.classList.remove("bg-danger");
  };

  return (
    <div>
      UseRefHook
      <hr />
      <input className="bg-danger" type="text" ref={inputRef}></input>
      <button className="btn btn-danger" onClick={inputRefHandler}>
        Click
      </button>
      <hr />
      {/* <button className="btn btn-success" onClick={stateIncHandler}>
        state Inc {count}
      </button>
      <hr />
      <button className="btn btn-primary" onClick={refIncHandler}>
        Ref Inc {refContainer.current}
      </button> */}
    </div>
  );
}

export default UseRefHook;
