//Conditional Rendering

const ValidPassword = () => <h1>ValidPassword</h1>;
const InvalidPassword = () => <h1>InvalidPassword</h1>;

const Password = ({ isValid }) => {

  // if (isValid) {
  //   return <h1>ValidPassword</h1>;
  // } 
  // else 
  
  // return <h1>InvalidPassword</h1>;
  
  //Ternary operator

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;
