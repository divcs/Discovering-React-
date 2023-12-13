import React from "react";
import "./index.css";

export const Style = () => {

// METHOD-1--- INLINE styles

      const differentStyle = {
        color: "blue",
        backgroundColor: "crimson",
        padding: "10px",
      };
      return (
        <h1
          style={{
            color: differentStyle.color,
            backgroundColor: differentStyle.backgroundColor,
          }}
        >
          Hello I'm React
        </h1>
      );


// METHOD-2--- CSS Modules
    //   return (
    //     <h1>Hello I'm React</h1>
    //   );

// METHOD-3--- Using CSS Libraries

    // return (
    //     <>
    //   <Button variant="outline-primary">Primary</Button>{' '}
    //   <Button variant="outline-secondary">Secondary</Button>{' '}
    //   <Button variant="outline-success">Success</Button>{' '}
    //   <Button variant="outline-warning">Warning</Button>{' '}
    //   <Button variant="outline-danger">Danger</Button>{' '}
    //   <Button variant="outline-info">Info</Button>{' '}
    //   <Button variant="outline-light">Light</Button>{' '}
    //   <Button variant="outline-dark">Dark</Button>
    //   </>
    // );
};

export default Style;
