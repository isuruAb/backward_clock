import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import { ChangeEventHandler, RefObject } from "react";

interface IProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  refs?: RefObject<HTMLInputElement>;
  name: string;
  error: string | undefined;
  value: string;
}

const TextField: React.FC<IProps> = (props) => {
  const { name, value, refs, onChange, placeholder, error } = props;
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

// TextField.propTypes = {
//   placeholder: PropTypes.string,
//   refs: PropTypes.object,
//   onChange: PropTypes.func,
//   name: PropTypes.string,
//   error: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

export default TextField;
