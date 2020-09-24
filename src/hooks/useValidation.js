import React, { useState } from "react";

export const useValidation = ({ validationSchema, values }) => {
  const [errors, setErrors] = useState({});
  const validateOnSubmit = () => {
    const fieldsToValidate = Object.keys(validationSchema);
    let identifiedErrors = {};
    fieldsToValidate.forEach((field) => {
      console.log(field, !values[field]);
      if (validationSchema[field].isRequired && !values[field]) {
        identifiedErrors[field] = { error: true, message: "Required" };
        return;
      }
      if (
        validationSchema[field].regex &&
        !validationSchema[field].regex.test(values[field])
      ) {
        identifiedErrors[field] = {
          error: true,
          message: validationSchema[field].message || `Invalid ${field}`,
        };
        return;
      }
      identifiedErrors[field] = {
        error: false,
      };
    });
    setErrors(identifiedErrors);

    let canSubmit = true;
    Object.keys(identifiedErrors).map((field) => {
      if (identifiedErrors[field].error) {
        canSubmit = false;
      }
    });
    return canSubmit;
  };

  const validateOnBlur = (field) => (e) => {
    const value = e.target.value;
    let error = {};
    console.log("validate", value);
    if (validationSchema[field].isRequired && !value) {
      error[field] = { error: true, message: "Required" };
    } else if (
      validationSchema[field].regex &&
      !validationSchema[field].regex.test(value)
    ) {
      error[field] = {
        error: true,
        message: validationSchema[field].message || `Invalid ${field}`,
      };
    } else {
      error[field] = { error: false };
    }
    setErrors((prev) => ({ ...prev, ...error }));
  };

  return { errors, validateOnSubmit, validateOnBlur };
};
