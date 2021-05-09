import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./index.module.scss"

const TextField = ({ placeholder, onChange, refs, name, error, value }) => {
  return (
    <Form.Group>
      <Form.Control
        value={value}
        ref={refs}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        name={name}
      />
      <Form.Text className={styles.errorMessage}>{error}</Form.Text>
    </Form.Group>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  refs: PropTypes.object,
  onChange: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextField;
