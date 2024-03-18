import { PropTypes } from "prop-types";

const buttonVariants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    tertiary: "btn-tertiary",
};

function Button({children, variant, utilityClasses = "", ...otherProps}) {

  return (
    <button
      className={`btn ${buttonVariants[variant] ? buttonVariants[variant] : null } ${utilityClasses}`}
      {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  handleClick: PropTypes.func,
  utilityClasses: PropTypes.string,
  children: PropTypes.node
};

export default Button;
