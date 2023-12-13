// Props

//Props destructuring

const User = ({ img, name, age, children }) => {

 
  return (
    <section>
      <img src={img} alt={name} />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {children}
    </section>
  );
};

export default User;
