import React, { useState } from "react";

export const useFormFields = (fields) => {
  const [formFields, setFormFields] = useState(fields);
  const createChangeHandler = (field) => (event) => {
    const value = event.target.value;
    setFormFields((prev) => ({ ...prev, [field]: value }));
  };
  return { formFields, createChangeHandler };
};
