const Filter = ({ setInput }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input onChange={setInput} type="teltext" name="filter" />
    </>
  );
};

export default Filter;
