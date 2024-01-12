import React from "react";
import Child from "./child";

function Parent() {
  function greetParents(childName) {
    alert(childName);
  }

  return (
    <div>
      <Child greetHolder={greetParents} />
    </div>
  );
}

export default Parent;
