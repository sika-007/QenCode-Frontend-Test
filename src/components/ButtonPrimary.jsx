import PropTypes from "prop-types";
const ButtonPrimary = ({ type, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonPrimary;
