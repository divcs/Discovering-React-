// updating string values in State
import React from "react";
import { useState } from "react";

const Update = () => {
  const [username, setUsername] = useState("Anonymous");

  //Updating String values in State
  const changeName = () => {
    setUsername(prompt("Enter your name"));
  };

  return (
    <>
      <h1>{username}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export const UpdatingStringValues = () => {
    return (
      <>
        <Update />
      </>
    );
  };
  