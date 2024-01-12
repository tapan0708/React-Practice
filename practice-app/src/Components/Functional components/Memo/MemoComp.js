import React from "react";

function MemoComp(props) {
  console.log("Rendering Memo Component");
  return <div>MemoComp {props.day}</div>;
}

export default React.memo(MemoComp);
