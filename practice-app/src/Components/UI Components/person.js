import React from "react";

export default function Person(props) {
  return (
    <div>
      <h2>
        I am {props.person.name}, My age is {props.person.age} years, My skill
        is {props.person.skill}
      </h2>
    </div>
  );
}
