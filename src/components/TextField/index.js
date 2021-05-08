import { Form } from "react-bootstrap";

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

export default TextField;
