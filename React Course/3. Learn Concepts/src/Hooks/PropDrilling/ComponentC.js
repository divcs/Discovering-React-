import { useContext } from "react";
import { Data, Data1,Create } from "./Create";

export const ComponentC = () => {

  //use context : commented code = this use context code
  //use useContext whre you'd consume your data
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <>
      <h1>My name is: {name} I'm {age}.</h1>
    </>
  );

  // Context API approach
  // return (
  //   // <div> Data coming from Component A-B-C : {name}</div>
  //   <>
  //     <Data.Consumer>
  //       {(name) => {
  //         //  return <h1>My name is: {name}</h1>
  //         return (
  //           <Data1.Consumer>
  //             {(age) => {
  //               return (
  //                 <h1>
  //                   My name is:{name} I'm {age}.
  //                 </h1>
  //               );
  //             }}
  //           </Data1.Consumer>
  //         );
  //       }}
  //     </Data.Consumer>
  //   </>
  // );


};
