import { useEffect, useState } from "react";

const useForm = (initialState, callback, validation) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  const handleChanges = (e) => {
    setIsSubmitting(false);
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };

  const submitForm = () => {
    setErrors(validation(values));
    setIsSubmitting(true);
  };

  return { values, errors, handleChanges, submitForm };
};

export default useForm;
