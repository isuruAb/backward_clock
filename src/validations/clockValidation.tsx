const clockValidation = (values: any) => {
  let errors: any = {};
  if (!values.decrementBySeconds) {
    errors.decrementBySeconds = "This field is required";
  }
  if (values.decrementBySeconds > 1000) {
    errors.decrementBySeconds = "Value should be less than 1000";
  }
  if (values.decrementBySeconds <= 0) {
    errors.decrementBySeconds = "Value should be greater than 0";
  }
  return errors;
};
export default clockValidation;
