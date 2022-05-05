import { useCallback, useState } from "react"

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

    
    const handleChange = (e) => {
      const input = e.target;
      const value = input.value;
      const name = input.name;

      setValues(prevState => ({ ...prevState, [name]: value}));
      
      setErrors (prevState => ({ ...prevState, [name]: input.validationMessage }));
      setIsValid(input.closest("form").checkValidity())
    }

    const resetForm = useCallback(
      (newValues={}, newErrors={}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    )

    return { values, handleChange, errors, isValid, resetForm }
}