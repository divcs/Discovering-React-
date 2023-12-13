import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);    //gets the input value in the field
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed  ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


export default Form;