const dummyValidation = (values) => {
    let errors = {};
    if (!values.decrementBySeconds) {
      errors.decrementBySeconds = "This field is required";
    }
    return errors;
  };
  export default dummyValidation;
  