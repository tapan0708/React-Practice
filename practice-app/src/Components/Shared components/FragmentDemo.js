import React from "react";
import Table from "./Table";

function FragmentDemo() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <h2>{element}</h2>
            <p>element</p>
          </React.Fragment>
        );
      })}
      <h1>I am fragment</h1>
      <Table />
    </>
  );
}

export default FragmentDemo;
