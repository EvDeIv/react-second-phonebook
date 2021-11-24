import PropTypes from "prop-types";

function Profile(props) {
  const {
    user: { name, tag, location, avatar },
    children,
  } = props;
  const text = Object.assign({}, children);
  text.props = props.user;
  return (
    <div className="flex flex-col justify-between items-center w-52 border border-solid border-gray-300 rounded-md">
      <div className="flex flex-col justify-between items-center">
        <img
          src={avatar}
          alt={name}
          className="h-24 w-24 rounded-full bg-yellow-100 my-5"
        />
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-base text-gray-400 my-1">@{tag}</p>
        <p className="text-base text-gray-400 mb-5">{location}</p>
      </div>
      {text}
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tac: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default Profile;
