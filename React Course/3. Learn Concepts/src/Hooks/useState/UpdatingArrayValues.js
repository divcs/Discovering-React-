import React from "react";
import { useState } from "react";

export const UpdatingArrayValues = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOne = () => {
    setFriends([...friends, "Zen"]); //adds Zen
  };

  const removeOne = () => {
    setFriends(friends.slice(0, friends.length - 1));   //removes the last added friend
    // setFriends(friends.filter((friend) => friend !== "Alex")); //removes Alex
  };

  const updateOne = () => {
    setFriends(
      friends.map((friend) => (friend === "Alex" ? "Alex Smith" : friend)) //updates Alex to Alex Smith
    );
  };

  return (
    <>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}
      <button onClick={addOne}>Add</button>
      <button onClick={removeOne}>Remove</button>
      <button onClick={updateOne}>Update</button>
    </>
  );
};
