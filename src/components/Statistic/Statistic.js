const Statistic = ({ stats, countTotal, countPositive }) => {
  let keys = Object.keys(stats);
  return (
    <>
      <h2 className="text-xl font-bold">Statistics</h2>
      {keys.map((el) => {
        return (
          <span
            key={el}
            className="block capitalize"
          >{`${el}:${stats[el]}`}</span>
        );
      })}
      <span className="block capitalize">{`Total:${countTotal()}`}</span>
      <span className="block capitalize">{`Positive feedbacks:${countPositive()}%`}</span>
    </>
  );
};

export default Statistic;
