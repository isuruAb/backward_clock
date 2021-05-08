import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TextField = ({ placeholder, onChange, refs }) => {
  return (
    <Form.Group>
      <Form.Control
        ref={refs}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  refs: PropTypes.object,
  onChange: PropTypes.func,
};

export default TextField;
