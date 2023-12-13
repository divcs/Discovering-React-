import React from "react";

// Exanple of CopyEvent
const Copy = () => {
  const copyHandler = () => {
    alert("Stop Stealing My Content");
  };
  return (
    <>
      <p onCopy={copyHandler}>
        This is paragraph content which cannot be copied, when someone tries to
        copy it, it alerts the user to stop stealing the content.
      </p>
    </>
  );
};

export function CopyEvent() {
    return <Copy />;
  }
  



