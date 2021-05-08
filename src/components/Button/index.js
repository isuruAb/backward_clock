import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ActionButton = ({ text, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
