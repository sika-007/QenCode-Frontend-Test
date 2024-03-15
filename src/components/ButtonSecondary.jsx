import PropTypes from "prop-types";

const ButtonSecondary = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 text-center border border-blue-700 text-blue-700 bg-white rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default ButtonSecondary;
