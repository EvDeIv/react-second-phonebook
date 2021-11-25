const Delete = ({ deleteContact, name }) => {
  return <button onClick={deleteContact(name)}>Delete</button>;
};

export default Delete;
