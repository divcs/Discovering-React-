// useful when need to access the value of an element

import { useRef } from "react";

function UseRef() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "divcs";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write divcs</button>
    </>
  );
}

export default UseRef;
