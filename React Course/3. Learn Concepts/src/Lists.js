//Lists in React

const Lists = () => {

  const UserInfo = [
    {
      username: "Alice",
      email: "alice@gmail.com",
      address: "UK",
    },
    {
      username: "Bob",
      email: "bob@gmail.com",
      address: "USA",
    },
    {
      username: "Carol",
      email: "carol@gmail.com",
      address: "USA",
    },
  ];
  return (
    <>
      {UserInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.address}</li>
        </ul>
      ))}
    </>
  );
}

export default Lists