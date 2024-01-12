import React from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.greetHolder("Chlid");
        }}
      >
        greet parents
      </button>
    </div>
  );
}

export default Child;
