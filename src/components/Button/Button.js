const Button = ({ feedbackType, addFeedback }) => {
  return (
    <button
      onClick={() => addFeedback(feedbackType)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize  ml-2 my-2"
    >
      {feedbackType}
    </button>
  );
};

export default Button;
