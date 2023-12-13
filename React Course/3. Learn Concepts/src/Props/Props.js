//Props in React

import React from 'react'
import User from './User';

const Props = () => {
    
    return(
      <>
      <User 
      img = "https://images.unsplash.com/photo-1697163511426-1ee277377229?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
      name = "Alice"
      age={20}
      hobbies={["Coding", "Reading", "Playing"]}>
  
        {/* Props Children */}
        
        <p>This is the Props Children text</p>
      </User>
      </>
  );
}

export default Props