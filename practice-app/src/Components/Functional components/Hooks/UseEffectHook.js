import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call on every update"); //call every time
  });

  useEffect(() => {
    console.log("call once"); //component mounting
  }, []);

  useEffect(() => {
    console.log("call on first time and count update"); //component updating
  }, [count]);

  useEffect(() => {
    console.log("Use Effect called");
    return () => {
      console.log("call on unmount"); //component unmount
    };
  }, []);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      UseEffectHook
      <button className="btn btn-primary" onClick={incrementHandler}>
        Increment
      </button>
    </div>
  );
}
export default UseEffectHook;
