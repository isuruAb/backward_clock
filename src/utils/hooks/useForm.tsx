import { ChangeEvent, useEffect, useState } from "react";

const useForm = (
  initialState: any,
  callback: Function,
  validation: Function
) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
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
