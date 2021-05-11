const dummyValidation = (values: any) => {
  let errors: any = {};
  if (!values.decrementBySeconds) {
    errors.decrementBySeconds = "This field is required";
  }
  return errors;
};
export default dummyValidation;
