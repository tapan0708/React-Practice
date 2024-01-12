import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const user = useParams();
  return (
    <div>
      <h1>userId : {user.id}</h1>
    </div>
  );
}

export default User;
